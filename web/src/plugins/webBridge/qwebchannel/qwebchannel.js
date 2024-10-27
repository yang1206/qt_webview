// eslint-disable
// @ts-expect-error
/**
 * @source https://github.com/qt/qtwebchannel/blob/6.7.2/examples/webchannel/shared/qwebchannel.js
 */
// Copyright (C) 2016 The Qt Company Ltd.
// Copyright (C) 2016 Klarälvdalens Datakonsult AB, a KDAB Group company, info@kdab.com, author Milian Wolff <milian.wolff@kdab.com>
// SPDX-License-Identifier: LicenseRef-Qt-Commercial OR LGPL-3.0-only OR GPL-2.0-only OR GPL-3.0-only
/// <reference path="./qwebchannel.d.ts"/>
'use strict'

const QWebChannelMessageTypes = {
  signal: 1,
  propertyUpdate: 2,
  init: 3,
  idle: 4,
  debug: 5,
  invokeMethod: 6,
  connectToSignal: 7,
  disconnectFromSignal: 8,
  setProperty: 9,
  response: 10,
}

const QWebChannel = function (transport, initCallback, converters) {
  if (typeof transport !== 'object' || typeof transport.send !== 'function') {
    console.error(`The QWebChannel expects a transport object with a send function and onmessage callback property.`
      + ` Given is: transport: ${typeof (transport)}, transport.send: ${typeof (transport.send)}`)
    return
  }

  const channel = this
  this.transport = transport

  const converterRegistry
    = {
      Date(response) {
        if (typeof response === 'string'
          && response.match(
            /^-?\d+-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?([-+\u2212](\d{2}):(\d{2})|Z)?$/,
          )) {
          const date = new Date(response)
          if (!isNaN(date))
            return date
        }
        return undefined // Return undefined if current converter is not applicable
      },
    }

  this.usedConverters = []

  this.addConverter = function (converter) {
    if (typeof converter === 'string') {
      if (converterRegistry.hasOwnProperty(converter))
        this.usedConverters.push(converterRegistry[converter])
      else
        console.error(`Converter '${converter}' not found`)
    }
    else if (typeof converter === 'function') {
      this.usedConverters.push(converter)
    }
    else {
      console.error(`Invalid converter object type ${typeof converter}`)
    }
  }

  if (Array.isArray(converters)) {
    for (const converter of converters)
      this.addConverter(converter)
  }
  else if (converters !== undefined) {
    this.addConverter(converters)
  }

  this.send = function (data) {
    if (typeof (data) !== 'string') {
      data = JSON.stringify(data)
    }
    channel.transport.send(data)
  }

  this.transport.onmessage = function (message) {
    let data = message.data
    if (typeof data === 'string') {
      data = JSON.parse(data)
    }
    switch (data.type) {
      case QWebChannelMessageTypes.signal:
        channel.handleSignal(data)
        break
      case QWebChannelMessageTypes.response:
        channel.handleResponse(data)
        break
      case QWebChannelMessageTypes.propertyUpdate:
        channel.handlePropertyUpdate(data)
        break
      default:
        console.error('invalid message received:', message.data)
        break
    }
  }

  this.execCallbacks = {}
  this.execId = 0
  this.exec = function (data, callback) {
    if (!callback) {
      // if no callback is given, send directly
      channel.send(data)
      return
    }
    if (channel.execId === Number.MAX_VALUE) {
      // wrap
      channel.execId = Number.MIN_VALUE
    }
    if (data.hasOwnProperty('id')) {
      console.error(`Cannot exec message with property id: ${JSON.stringify(data)}`)
      return
    }
    data.id = channel.execId++
    channel.execCallbacks[data.id] = callback
    channel.send(data)
  }

  this.objects = {}

  this.handleSignal = function (message) {
    const object = channel.objects[message.object]
    if (object) {
      object.signalEmitted(message.signal, message.args)
    }
    else {
      console.warn(`Unhandled signal: ${message.object}::${message.signal}`)
    }
  }

  this.handleResponse = function (message) {
    if (!message.hasOwnProperty('id')) {
      console.error('Invalid response message received: ', JSON.stringify(message))
      return
    }
    channel.execCallbacks[message.id](message.data)
    delete channel.execCallbacks[message.id]
  }

  this.handlePropertyUpdate = function (message) {
    message.data.forEach((data) => {
      const object = channel.objects[data.object]
      if (object) {
        object.propertyUpdate(data.signals, data.properties)
      }
      else {
        console.warn(`Unhandled property update: ${data.object}::${data.signal}`)
      }
    })
    channel.exec({ type: QWebChannelMessageTypes.idle })
  }

  this.debug = function (message) {
    channel.send({ type: QWebChannelMessageTypes.debug, data: message })
  }

  channel.exec({ type: QWebChannelMessageTypes.init }, (data) => {
    for (const objectName of Object.keys(data)) {
      new QObject(objectName, data[objectName], channel)
    }

    // now unwrap properties, which might reference other registered objects
    for (const objectName of Object.keys(channel.objects)) {
      channel.objects[objectName].unwrapProperties()
    }

    if (initCallback) {
      initCallback(channel)
    }
    channel.exec({ type: QWebChannelMessageTypes.idle })
  })
}

function QObject(name, data, webChannel) {
  this.__id__ = name
  webChannel.objects[name] = this

  // List of callbacks that get invoked upon signal emission
  this.__objectSignals__ = {}

  // Cache of all properties, updated when a notify signal is emitted
  this.__propertyCache__ = {}

  const object = this

  // ----------------------------------------------------------------------

  this.unwrapQObject = function (response) {
    for (const converter of webChannel.usedConverters) {
      const result = converter(response)
      if (result !== undefined)
        return result
    }

    if (Array.isArray(response)) {
      // support list of objects
      return response.map(qobj => object.unwrapQObject(qobj))
    }
    if (!(response instanceof Object))
      return response

    if (!response['__QObject*__'] || response.id === undefined) {
      const jObj = {}
      for (const propName of Object.keys(response)) {
        jObj[propName] = object.unwrapQObject(response[propName])
      }
      return jObj
    }

    const objectId = response.id
    if (webChannel.objects[objectId])
      return webChannel.objects[objectId]

    if (!response.data) {
      console.error(`Cannot unwrap unknown QObject ${objectId} without data.`)
      return
    }

    const qObject = new QObject(objectId, response.data, webChannel)
    qObject.destroyed.connect(() => {
      if (webChannel.objects[objectId] === qObject) {
        delete webChannel.objects[objectId]
        // reset the now deleted QObject to an empty {} object
        // just assigning {} though would not have the desired effect, but the
        // below also ensures all external references will see the empty map
        // NOTE: this detour is necessary to workaround QTBUG-40021
        Object.keys(qObject).forEach(name => delete qObject[name])
      }
    })
    // here we are already initialized, and thus must directly unwrap the properties
    qObject.unwrapProperties()
    return qObject
  }

  this.unwrapProperties = function () {
    for (const propertyIdx of Object.keys(object.__propertyCache__)) {
      object.__propertyCache__[propertyIdx] = object.unwrapQObject(object.__propertyCache__[propertyIdx])
    }
  }

  function addSignal(signalData, isPropertyNotifySignal) {
    const signalName = signalData[0]
    const signalIndex = signalData[1]
    object[signalName] = {
      connect(callback) {
        if (typeof (callback) !== 'function') {
          console.error(`Bad callback given to connect to signal ${signalName}`)
          return
        }

        object.__objectSignals__[signalIndex] = object.__objectSignals__[signalIndex] || []
        object.__objectSignals__[signalIndex].push(callback)

        // only required for "pure" signals, handled separately for properties in propertyUpdate
        if (isPropertyNotifySignal)
          return

        // also note that we always get notified about the destroyed signal
        if (signalName === 'destroyed' || signalName === 'destroyed()' || signalName === 'destroyed(QObject*)')
          return

        // and otherwise we only need to be connected only once
        if (object.__objectSignals__[signalIndex].length == 1) {
          webChannel.exec({
            type: QWebChannelMessageTypes.connectToSignal,
            object: object.__id__,
            signal: signalIndex,
          })
        }
      },
      disconnect(callback) {
        if (typeof (callback) !== 'function') {
          console.error(`Bad callback given to disconnect from signal ${signalName}`)
          return
        }
        // This makes a new list. This is important because it won't interfere with
        // signal processing if a disconnection happens while emittig a signal
        object.__objectSignals__[signalIndex] = (object.__objectSignals__[signalIndex] || []).filter((c) => {
          return c != callback
        })
        if (!isPropertyNotifySignal && object.__objectSignals__[signalIndex].length === 0) {
          // only required for "pure" signals, handled separately for properties in propertyUpdate
          webChannel.exec({
            type: QWebChannelMessageTypes.disconnectFromSignal,
            object: object.__id__,
            signal: signalIndex,
          })
        }
      },
    }
  }

  /**
   * Invokes all callbacks for the given signalname. Also works for property notify callbacks.
   */
  function invokeSignalCallbacks(signalName, signalArgs) {
    const connections = object.__objectSignals__[signalName]
    if (connections) {
      connections.forEach((callback) => {
        callback.apply(callback, signalArgs)
      })
    }
  }

  this.propertyUpdate = function (signals, propertyMap) {
    // update property cache
    for (const propertyIndex of Object.keys(propertyMap)) {
      const propertyValue = propertyMap[propertyIndex]
      object.__propertyCache__[propertyIndex] = this.unwrapQObject(propertyValue)
    }

    for (const signalName of Object.keys(signals)) {
      // Invoke all callbacks, as signalEmitted() does not. This ensures the
      // property cache is updated before the callbacks are invoked.
      invokeSignalCallbacks(signalName, signals[signalName])
    }
  }

  this.signalEmitted = function (signalName, signalArgs) {
    invokeSignalCallbacks(signalName, this.unwrapQObject(signalArgs))
  }

  function addMethod(methodData) {
    const methodName = methodData[0]
    const methodIdx = methodData[1]

    // Fully specified methods are invoked by id, others by name for host-side overload resolution
    const invokedMethod = methodName[methodName.length - 1] === ')' ? methodIdx : methodName

    object[methodName] = function () {
      const args = []
      let callback
      let errCallback
      for (let i = 0; i < arguments.length; ++i) {
        const argument = arguments[i]
        if (typeof argument === 'function')
          callback = argument
        else
          args.push(argument)
      }

      let result
      // during test, webChannel.exec synchronously calls the callback
      // therefore, the promise must be constucted before calling
      // webChannel.exec to ensure the callback is set up
      if (!callback && (typeof (Promise) === 'function')) {
        result = new Promise((resolve, reject) => {
          callback = resolve
          errCallback = reject
        })
      }

      webChannel.exec({
        type: QWebChannelMessageTypes.invokeMethod,
        object: object.__id__,
        method: invokedMethod,
        args,
      }, (response) => {
        if (response !== undefined) {
          const result = object.unwrapQObject(response)
          if (callback) {
            (callback)(result)
          }
        }
        else if (errCallback) {
          (errCallback)()
        }
      })

      return result
    }
  }

  function bindGetterSetter(propertyInfo) {
    const propertyIndex = propertyInfo[0]
    const propertyName = propertyInfo[1]
    const notifySignalData = propertyInfo[2]
    // initialize property cache with current value
    // NOTE: if this is an object, it is not directly unwrapped as it might
    // reference other QObject that we do not know yet
    object.__propertyCache__[propertyIndex] = propertyInfo[3]

    if (notifySignalData) {
      if (notifySignalData[0] === 1) {
        // signal name is optimized away, reconstruct the actual name
        notifySignalData[0] = `${propertyName}Changed`
      }
      addSignal(notifySignalData, true)
    }

    Object.defineProperty(object, propertyName, {
      configurable: true,
      get() {
        const propertyValue = object.__propertyCache__[propertyIndex]
        if (propertyValue === undefined) {
          // This shouldn't happen
          console.warn(`Undefined value in property cache for property "${propertyName}" in object ${object.__id__}`)
        }

        return propertyValue
      },
      set(value) {
        if (value === undefined) {
          console.warn(`Property setter for ${propertyName} called with undefined value!`)
          return
        }
        object.__propertyCache__[propertyIndex] = value
        const valueToSend = value
        webChannel.exec({
          type: QWebChannelMessageTypes.setProperty,
          object: object.__id__,
          property: propertyIndex,
          value: valueToSend,
        })
      },
    })
  }

  // ----------------------------------------------------------------------

  data.methods.forEach(addMethod)

  data.properties.forEach(bindGetterSetter)

  data.signals.forEach((signal) => { addSignal(signal, false) })

  Object.assign(object, data.enums)
}

QObject.prototype.toJSON = function () {
  if (this.__id__ === undefined)
    return {}
  return {
    'id': this.__id__,
    '__QObject*__': true,
  }
}

export default QWebChannel
