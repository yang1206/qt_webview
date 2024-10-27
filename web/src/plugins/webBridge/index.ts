import type { BridgeMessage, BridgeOptions, BridgeResponse } from './bridge'
import QWebChannel from './qwebchannel/qwebchannel'

export class QtBridge {
  private channel: QWebChannel | null = null
  private qtObject: any = null
  private messageId = 0
  private callbacks = new Map<number, (response: BridgeResponse) => void>()
  private eventListeners: Map<string, Array<(data: string) => void>> = new Map()

  constructor(private options: BridgeOptions) {
    this.init()
  }

  private async init() {
    try {
      await this.waitForTransport()
      // eslint-disable-next-line no-console
      console.log('WebChannel transport ready')

      // eslint-disable-next-line no-new
      new QWebChannel(window.qt.webChannelTransport, (channel) => {
        this.channel = channel
        this.qtObject = channel.objects[this.options.objectName]

        if (!this.qtObject) {
          throw new Error(`Qt object "${this.options.objectName}" not found`)
        }

        // 设置消息接收处理
        this.qtObject[this.options.receiveSignal].connect((response: string) => {
          this.handleResponse(response)
        })

        // 设置消息信号处理
        if (this.options.messageSignal) {
          this.qtObject[this.options.messageSignal].connect((message: string) => {
            this.handleMessage(message)
          })
        }

        // eslint-disable-next-line no-console
        console.log('QtBridge initialized successfully')
      })
    }
    catch (err) {
      console.error('Failed to initialize QtBridge:', err)
      throw err
    }
  }

  private waitForTransport(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.qt?.webChannelTransport) {
        resolve()
        return
      }

      let attempts = 0
      const maxAttempts = 50
      const interval = setInterval(() => {
        if (window.qt?.webChannelTransport) {
          clearInterval(interval)
          resolve()
          return
        }

        if (++attempts >= maxAttempts) {
          clearInterval(interval)
          reject(new Error('Timeout waiting for WebChannel transport'))
        }
      }, 100)
    })
  }

  public on(event: string, callback: (data: string) => void) {
    // eslint-disable-next-line no-console
    console.log('Adding listener for event:', event)
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, [])
    }
    this.eventListeners.get(event)?.push(callback)
  }

  public off(event: string, callback: (data: string) => void) {
    // eslint-disable-next-line no-console
    console.log('Removing listener for event:', event)
    const listeners = this.eventListeners.get(event)
    if (listeners) {
      const index = listeners.indexOf(callback)
      if (index !== -1) {
        listeners.splice(index, 1)
      }
    }
  }

  private handleResponse(responseStr: string) {
    // eslint-disable-next-line no-console
    console.log('Handling response:', responseStr)
    try {
      const response = JSON.parse(responseStr)

      // 处理回调
      const callback = this.callbacks.get(response.id)
      if (callback) {
        callback(response)
        this.callbacks.delete(response.id)
      }

      // 触发响应事件
      const listeners = this.eventListeners.get(this.options.receiveSignal)
      if (listeners) {
        listeners.forEach(listener => listener(responseStr))
      }
    }
    catch (err) {
      console.error('Failed to handle response:', err)
    }
  }

  private handleMessage(messageStr: string) {
    // eslint-disable-next-line no-console
    console.log('Handling message:', messageStr)
    try {
      // 触发消息事件
      const messageListeners = this.eventListeners.get(this.options.messageSignal!)
      if (messageListeners) {
        messageListeners.forEach(listener => listener(messageStr))
      }
    }
    catch (err) {
      console.error('Failed to handle message:', err)
    }
  }

  public send<T = any, R = any>(message: Omit<BridgeMessage<T>, 'id'>): Promise<R> {
    return new Promise((resolve, reject) => {
      if (!this.qtObject) {
        reject(new Error('Bridge not initialized'))
        return
      }

      const id = ++this.messageId
      const fullMessage: BridgeMessage<T> = {
        id,
        ...message,
      }
      // eslint-disable-next-line no-console
      console.log('Sending message:', fullMessage)

      this.callbacks.set(id, (response: BridgeResponse<R>) => {
        if (response.success) {
          resolve(response.data!)
        }
        else {
          reject(new Error(response.error || 'Unknown error'))
        }
      })

      try {
        this.qtObject[this.options.sendMethod](JSON.stringify(fullMessage))
      }
      catch (err) {
        this.callbacks.delete(id)
        reject(err)
      }
    })
  }
}
