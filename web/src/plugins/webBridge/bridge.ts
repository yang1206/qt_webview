// 基础消息格式
export interface BridgeMessage<T = any> {
  id: number // 消息ID，用于追踪请求-响应
  action: string // 动作类型
  data?: T // 消息数据
}

// 响应消息格式
export interface BridgeResponse<T = any> {
  id: number // 对应请求的ID
  success: boolean // 是否成功
  data?: T // 响应数据
  error?: string // 错误信息
}

// Bridge配置选项
export interface BridgeOptions {
  objectName: string // Qt对象名称
  sendMethod: string // 发送方法名
  receiveSignal: string // 接收信号名
  messageSignal?: string // 添加新的消息信号
}
