// 基础消息格式
export interface BridgeMessage<T = any> {
  id: number // 消息ID，用于追踪请求-响应
  action: string // 动作类型
  data?: T // 消息数据
}

// 请求消息格式
export interface BridgeRequest<T = any> extends Omit<BridgeMessage<T>, 'id'> {
  id?: number
}

// 响应消息格式
export interface BridgeResponse<T = any> extends BridgeMessage<T> {
  success: boolean // 是否成功
  error?: string // 错误信息
}

// 事件监听器类型
export type EventListener<T = any> = (data: T) => void

// 定义固定的桥接配置
export const BRIDGE_CONFIG = {
  objectName: 'bridge',
  sendMethod: 'requestFromClient',
  signals: {
    response: 'responseFromServer',
    message: 'messageFromServer',
    binary: 'binaryFromServer',
  },
  actions: {
    webMessage: 'web-message',
    qtMessage: 'qt-message',
    toggleDataMode: 'toggle-data-mode',
  },
} as const

// BridgeOptions 可以设为只读类型
export type BridgeOptions = Readonly<typeof BRIDGE_CONFIG>

// 二进制数据处理器类型
export type BinaryDataHandler = (data: ArrayBuffer, type: string) => void
