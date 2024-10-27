// 基础类型定义
interface PlainObject<T = any> {
  [key: string]: T
}

// 消息类型枚举
declare const enum QWebChannelMessageTypes {
  signal = 1,
  propertyUpdate = 2,
  init = 3,
  idle = 4,
  debug = 5,
  invokeMethod = 6,
  connectToSignal = 7,
  disconnectFromSignal = 8,
  setProperty = 9,
  response = 10,
}

// 传输层接口
interface WebChannelTransport {
  send: (data: string) => void
  onmessage: (message: { data: any }) => void
}

// 转换器类型
type Converter = (response: any) => any | undefined

// QObject 相关接口
interface QObjectSignal {
  connect: (callback: Function) => void
  disconnect: (callback: Function) => void
}

interface QObjectData {
  methods: [string, number][]
  properties: [number, string, [string, number]?, any?][]
  signals: [string, number][]
  enums: PlainObject
}

// QObject 类定义
declare class QObject {
  constructor(name: string, data: QObjectData, webChannel: QWebChannel)

  __id__: string
  __objectSignals__: { [key: number]: Function[] }
  __propertyCache__: { [key: number]: any }

  unwrapQObject(response: any): any
  unwrapProperties(): void
  propertyUpdate(signals: PlainObject, propertyMap: PlainObject): void
  signalEmitted(signalName: string | number, signalArgs: any[]): void

  [key: string]: any // 动态添加的方法和属性

  toJSON(): { 'id'?: string, '__QObject*__'?: boolean }
}

// QWebChannel 类定义
declare class QWebChannel {
  constructor(
    transport: WebChannelTransport,
    initCallback?: (channel: QWebChannel) => void,
    converters?: string | Function | (string | Function)[]
  )

  transport: WebChannelTransport
  execCallbacks: { [key: number]: Function }
  execId: number
  objects: { [key: string]: QObject }
  usedConverters: Converter[]

  addConverter(converter: string | Function): void
  send(data: any): void
  exec(data: any, callback?: (response?: any) => void): void
  debug(message: any): void

  handleSignal(message: { object: string, signal: string | number, args: any[] }): void
  handleResponse(message: { id: number, data?: any }): void
  handlePropertyUpdate(message: {
    data: Array<{
      object: string
      signals: PlainObject
      properties: PlainObject
    }>
  }): void
}

export default QWebChannel
