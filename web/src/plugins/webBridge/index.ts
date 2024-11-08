import type { BridgeOptions } from './bridge'
import QWebChannel from './qwebchannel/qwebchannel'

export class QtBridge {
  private channel: QWebChannel | null = null
  private qtObject: any = null
  private messageId = 0
  private callbacks = new Map<number, (response: BridgeResponse) => void>()
  private eventListeners = new Map<string, Array<(data: any) => void>>()

  constructor(private options: BridgeOptions) {
    this.init()
  }

  private async init() {
    try {
      await this.waitForTransport()

      // eslint-disable-next-line no-new
      new QWebChannel(window.qt.webChannelTransport, (channel) => {
        this.channel = channel
        this.qtObject = channel.objects[this.options.objectName]

        if (!this.qtObject) {
          throw new Error(`Qt object "${this.options.objectName}" not found`)
        }

        // 统一设置信号处理
        Object.values(this.options.signals).forEach((signal) => {
          this.qtObject[signal].connect((data: any) => {
            const listeners = this.eventListeners.get(signal)
            if (listeners) {
              if (signal === this.options.signals.binary) {
                try {
                  // 解码 Base64 数据
                  const binaryString = atob(data)
                  const bytes = new Uint8Array(binaryString.length)

                  // 转换为字节数组
                  for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i)
                  }

                  // 传递 ArrayBuffer 给监听器
                  listeners.forEach(listener => listener(bytes.buffer))
                }
                catch (err) {
                  console.error('Error processing binary data:', err)
                  console.error('Data:', data)
                }
              }
              else {
                listeners.forEach(listener => listener(data))
              }
            }
          })
        })
      })
    }
    catch (err) {
      console.error('Failed to initialize QtBridge:', err)
      throw err
    }
  }

  private async waitForTransport(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.qt?.webChannelTransport) {
        resolve()
        return
      }

      let retries = 0
      const maxRetries = 50
      const interval = setInterval(() => {
        if (window.qt?.webChannelTransport) {
          clearInterval(interval)
          resolve()
          return
        }

        if (++retries >= maxRetries) {
          clearInterval(interval)
          reject(new Error('Failed to find Qt WebChannel transport'))
        }
      }, 100)
    })
  }

  private handleResponse(response: string) {
    try {
      const data = JSON.parse(response)
      const callback = this.callbacks.get(data.id)
      if (callback) {
        callback(data)
        this.callbacks.delete(data.id)
      }
    }
    catch (err) {
      console.error('Failed to handle response:', err)
    }
  }

  public async send(request: BridgeRequest): Promise<BridgeResponse> {
    if (!this.qtObject)
      throw new Error('Bridge not initialized')

    const id = ++this.messageId
    const message = {
      ...request,
      id,
    }

    return new Promise((resolve, reject) => {
      this.callbacks.set(id, (response: BridgeResponse) => {
        if (response.success) {
          resolve(response)
        }
        else {
          reject(new Error(response.error || 'Unknown error'))
        }
      })

      try {
        this.qtObject[this.options.sendMethod](JSON.stringify(message))
      }
      catch (err) {
        this.callbacks.delete(id)
        reject(err)
      }
    })
  }

  public on(signal: string, handler: (data: any) => void) {
    if (!this.eventListeners.has(signal)) {
      this.eventListeners.set(signal, [])
    }
    this.eventListeners.get(signal)?.push(handler)
  }

  public off(signal: string, handler: (data: any) => void) {
    const listeners = this.eventListeners.get(signal)
    if (listeners) {
      const index = listeners.indexOf(handler)
      if (index !== -1) {
        listeners.splice(index, 1)
      }
    }
  }

  public dispose() {
    this.callbacks.clear()
    this.eventListeners.clear()
  }
}

// 类型定义
export interface BridgeRequest {
  action: string
  data?: any
  id?: number
  type?: string
}

export interface BridgeResponse {
  id: number
  success: boolean
  data?: any
  error?: string
}
