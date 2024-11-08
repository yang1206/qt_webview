import { QtBridge } from '@/plugins/webBridge'
import { BRIDGE_CONFIG } from '@/plugins/webBridge/bridge'
import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useQtBridge() {
  const bridge = ref<QtBridge | null>(null)
  const isConnected = ref(false)
  const isReady = ref(false)
  const error = ref<Error | null>(null)

  const createBridge = async () => {
    try {
      bridge.value = new QtBridge(BRIDGE_CONFIG)
      isConnected.value = true
      isReady.value = true
      error.value = null
    }
    catch (err) {
      console.error('Failed to create QtBridge:', err)
      error.value = err as Error
      isConnected.value = false
      isReady.value = false
    }
  }

  onMounted(() => {
    createBridge()
  })

  onBeforeUnmount(() => {
    if (bridge.value) {
      bridge.value.dispose()
      bridge.value = null
    }
    isConnected.value = false
    isReady.value = false
  })

  return {
    bridge,
    isConnected,
    isReady,
    error,
  }
}
