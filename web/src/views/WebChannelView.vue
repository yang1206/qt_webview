<script setup lang="ts">
import { useQtBridge, useQtMessages } from '@/composables'
import { NButton, NCard, NInput, NSpace, useMessage } from 'naive-ui'
import { nextTick, ref, watch } from 'vue'

const message = useMessage()
const messageContent = ref('')

const { bridge, isConnected, isReady } = useQtBridge({
  objectName: 'bridge',
  sendMethod: 'requestFromClient',
  receiveSignal: 'responseFromServer',
  messageSignal: 'messageFromServer',
})

const { messages, sendMessage } = useQtMessages(bridge as any)

const messageListRef = ref<HTMLDivElement>()

// 添加滚动到底部的方法
function scrollToBottom() {
  nextTick(() => {
    if (messageListRef.value) {
      const container = messageListRef.value
      container.scrollTop = container.scrollHeight
    }
  })
}

// 监听消息变化，自动滚动
watch(() => messages.value.length, () => {
  scrollToBottom()
})

async function handleSendMessage() {
  if (!messageContent.value.trim()) {
    message.warning('消息内容不能为空')
    return
  }

  if (!isConnected.value || !isReady.value) {
    message.error('Qt桥接尚未就绪')
    return
  }

  try {
    await sendMessage(messageContent.value)
    message.success('发送成功')
    messageContent.value = ''
  }
  catch (err) {
    message.error(`发送失败: ${err}`)
  }
}

// 格式化时间
function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
</script>

<template>
  <div class="message-container">
    <NCard title="消息记录" class="message-list">
      <div ref="messageListRef" class="message-content-wrapper">
        <template v-if="!isConnected">
          <div class="empty-message">
            未连接到Qt
          </div>
        </template>
        <template v-else-if="messages.length === 0">
          <div class="empty-message">
            暂无消息记录
          </div>
        </template>
        <div
          v-for="(item, index) in messages"
          :key="index"
          class="message-item"
          :class="[item.type === 'send' ? 'message-send' : 'message-receive']"
        >
          <div class="message-sender">
            {{ item.type === 'send' ? 'Web' : 'Qt' }}
          </div>
          <div class="message-bubble">
            <div class="message-content">
              {{ item.content }}
            </div>
            <div class="message-time">
              {{ formatTime(item.timestamp) }}
            </div>
          </div>
        </div>
      </div>
    </NCard>

    <div class="input-section">
      <NSpace vertical>
        <NInput
          v-model:value="messageContent"
          type="text"
          placeholder="请输入消息"
          :disabled="!isReady"
          @keyup.enter="handleSendMessage"
        />
        <NButton
          type="primary"
          block
          :disabled="!isReady"
          @click="handleSendMessage"
        >
          发送消息
        </NButton>
      </NSpace>
    </div>
  </div>
</template>

<style scoped>
.message-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.message-list {
  height: 400px;
  margin-bottom: 1rem;
}

.message-content-wrapper {
  height: 350px;
  overflow-y: auto;
  padding: 10px;
}

.empty-message {
  text-align: center;
  color: #999;
  padding: 20px;
}

.message-item {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  max-width: 80%;
}

.message-sender {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.message-bubble {
  padding: 10px;
  border-radius: 12px;
  position: relative;
}

.message-send {
  margin-left: auto;
  align-items: flex-end;

  .message-bubble {
    background-color: #e3f2fd;
    border-top-right-radius: 4px;
  }
}

.message-receive {
  margin-right: auto;
  align-items: flex-start;

  .message-bubble {
    background-color: #f5f5f5;
    border-top-left-radius: 4px;
  }
}

.message-content {
  word-break: break-word;
  line-height: 1.4;
}

.message-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
  text-align: right;
}

.input-section {
  margin-top: 1rem;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
}

/* 添加滚动条样式 */
.message-content-wrapper::-webkit-scrollbar {
  width: 6px;
}

.message-content-wrapper::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 3px;
}

.message-content-wrapper::-webkit-scrollbar-track {
  background-color: transparent;
}

@media (prefers-color-scheme: dark) {
  .message-send .message-bubble {
    background-color: #242424;
  }

  .message-receive .message-bubble {
    background-color: #242424;
  }
}
</style>
