import type { QtBridge } from '@/plugins/webBridge'
import type { Ref } from 'vue'
import { BRIDGE_CONFIG } from '@/plugins/webBridge/bridge'
import { ref, watchEffect } from 'vue'

export interface BinaryDataEvent {
  data: ArrayBuffer
  timestamp: number
}

export function useQtBinaryData(bridgeRef: Ref<QtBridge | null>) {
  const binaryEvents = ref<BinaryDataEvent[]>([])
  const lastBinaryData = ref<BinaryDataEvent | null>(null)

  watchEffect(() => {
    if (!bridgeRef.value)
      return

    const handleBinaryData = (data: ArrayBuffer) => {
      const newEvent = {
        data,
        timestamp: Date.now(),
      }

      lastBinaryData.value = newEvent
      binaryEvents.value = [...binaryEvents.value, newEvent]
    }

    bridgeRef.value.on(BRIDGE_CONFIG.signals.binary, handleBinaryData)

    return () => {
      bridgeRef.value?.off(BRIDGE_CONFIG.signals.binary, handleBinaryData)
    }
  })

  return {
    binaryEvents,
    lastBinaryData,
  }
}
