import type { BridgeOptions } from '@/plugins/webBridge/bridge'
import { QtBridge } from '@/plugins/webBridge'
import { onMounted, ref } from 'vue'

export function useQtBridge(options: BridgeOptions = {
  objectName: 'bridge',
  sendMethod: 'requestFromClient',
  receiveSignal: 'responseFromServer',
}) {
  const bridge = ref<QtBridge | null>(null)
  const isConnected = ref(false)
  const isReady = ref(false)
  const error = ref<Error | null>(null)

  const createBridge = async () => {
    try {
      // eslint-disable-next-line no-console
      console.log('Creating QtBridge...')
      bridge.value = new QtBridge(options)
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

  return {
    bridge,
    isConnected,
    isReady,
    error,
  }
}
