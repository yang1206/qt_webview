<script setup lang="ts">
import { useQtBridge } from '@/composables/useQtBridge'
import { BRIDGE_CONFIG } from '@/plugins/webBridge/bridge'
import { NGradientText, NTabPane, NTabs } from 'naive-ui'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import PrpdChart from '../components/PrpdChart.vue'
import PrpsChart from '../components/PrpsChart.vue'
import { DEFAULT_PRPD_CONFIG, type PRPDConfig, type PRPDPoint } from '../components/three/utils/prpd'

const activeTab = ref('prpd')
const { bridge } = useQtBridge()
const prpdData = ref<PRPDPoint[]>([])
const dataMode = ref<'json' | 'binary'>('json')

// PRPD 配置
const prpdConfig: PRPDConfig = DEFAULT_PRPD_CONFIG

// JSON 数据处理
function handleJsonData(message: string) {
  console.log(message)
  try {
    const data = JSON.parse(message)
    if (data.action === 'prpd-data') {
      prpdData.value = data.data.points
      dataMode.value = 'json'
    }
  }
  catch (err) {
    console.error('Failed to parse PRPD data:', err)
  }
}

// 二进制数据处理
function handleBinaryData(buffer: ArrayBuffer) {
  try {
    const dataView = new DataView(buffer)
    const pointCount = Math.floor(buffer.byteLength / 10)
    const points: PRPDPoint[] = []

    for (let i = 0; i < pointCount; i++) {
      const offset = i * 10 // 每个点占用 10 字节

      // 解析数据
      const point = {
        phase: dataView.getFloat32(offset, true), // 4 bytes, little-endian
        amplitude: dataView.getFloat32(offset + 4, true), // 4 bytes, little-endian
        count: dataView.getUint16(offset + 8, true), // 2 bytes, little-endian
      }

      // 验证数据范围
      if (point.phase < 0 || point.phase > 360
        || point.amplitude < 0 || point.amplitude > 50
        || point.count < 1 || point.count > prpdConfig.maxCount) {
        console.warn(`Invalid data at point ${i}:`, point)
        continue
      }

      points.push(point)
    }

    prpdData.value = points
    dataMode.value = 'binary'
  }
  catch (err) {
    console.error('Failed to parse binary data:', err)
  }
}

onMounted(() => {
  if (!bridge.value)
    return

  bridge.value.on(BRIDGE_CONFIG.signals.message, handleJsonData)
  bridge.value.on(BRIDGE_CONFIG.signals.binary, handleBinaryData)
})

onBeforeUnmount(() => {
  if (!bridge.value)
    return

  bridge.value.off(BRIDGE_CONFIG.signals.message, handleJsonData)
  bridge.value.off(BRIDGE_CONFIG.signals.binary, handleBinaryData)
})
</script>

<template>
  <main class="home-view">
    <NTabs v-model:value="activeTab" type="line" animated>
      <NTabPane name="prpd" tab="PRPD">
        <NGradientText>
          当前数据模式: {{ dataMode === 'json' ? 'JSON' : '二进制' }}
        </NGradientText>
        <div class="chart-container">
          <PrpdChart :data="prpdData" :config="prpdConfig" />
        </div>
      </NTabPane>
      <NTabPane name="prps" tab="PRPS">
        <div class="chart-container">
          <PrpsChart />
        </div>
      </NTabPane>
    </NTabs>
  </main>
</template>

<style scoped>
.home-view {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
