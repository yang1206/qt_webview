import type { QtBridge } from '@/plugins/webBridge'
import type { Ref } from 'vue'
import { ref, watchEffect } from 'vue'

export interface Message {
  content: string
  timestamp: number
  type: 'send' | 'receive'
  channel: 'webchannel' | 'websocket'
}

export function useQtMessages(bridgeRef: Ref<QtBridge | null>) {
  const messages = ref<Message[]>([])

  // 使用 watchEffect 来设置事件监听
  watchEffect(() => {
    if (!bridgeRef.value)
      return

    // 监听来自 Qt 的响应消息
    const handleResponse = (response: string) => {
      try {
        const data = JSON.parse(response)
        if (data.action === 'qt-message') {
          const newMessage = {
            content: data.data,
            timestamp: Date.now(),
            type: 'receive' as const,
            channel: data.type || 'webchannel',
          }
          messages.value = [...messages.value, newMessage]
        }
      }
      catch (err) {
        console.error('Failed to parse Qt message:', err)
      }
    }

    // 监听来自 Qt 的主动消息
    const handleMessage = (message: string) => {
      try {
        const data = JSON.parse(message)
        if (data.action === 'qt-message') {
          const newMessage = {
            content: data.data,
            timestamp: Date.now(),
            type: 'receive' as const,
            channel: data.type || 'webchannel',
          }
          messages.value = [...messages.value, newMessage]
        }
      }
      catch (err) {
        console.error('Failed to parse Qt message:', err)
      }
    }

    // 添加事件监听
    bridgeRef.value.on('responseFromServer', handleResponse)
    bridgeRef.value.on('messageFromServer', handleMessage)

    // 清理函数
    return () => {
      bridgeRef.value?.off('responseFromServer', handleResponse)
      bridgeRef.value?.off('messageFromServer', handleMessage)
    }
  })

  // 发送消息到 Qt
  const sendMessage = async (content: string, channel: 'webchannel' | 'websocket' = 'webchannel') => {
    if (!bridgeRef.value && channel === 'webchannel') {
      throw new Error('Bridge not initialized')
    }

    // 先添加消息到列表
    const newMessage = {
      content,
      timestamp: Date.now(),
      type: 'send' as const,
      channel,
    }
    messages.value = [...messages.value, newMessage]

    // 然后发送消息
    try {
      if (channel === 'webchannel') {
        await bridgeRef.value!.send({
          action: 'web-message',
          type: 'webchannel',
          data: content,
        })
      }
      // WebSocket 发送逻辑将在组件中处理
    }
    catch (err) {
      // 如果发送失败，从消息列表中移除该消息
      messages.value = messages.value.filter(msg => msg !== newMessage)
      throw err
    }
  }

  return {
    messages,
    sendMessage,
  }
}
