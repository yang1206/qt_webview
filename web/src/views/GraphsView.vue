<script setup lang="ts">
import { NTabPane, NTabs } from 'naive-ui'
import { ref } from 'vue'
import PrpdChart from '../components/PrpdChart.vue'
import PrpsChart from '../components/PrpsChart.vue'

const activeTab = ref('prpd')
</script>

<template>
  <main class="home-view">
    <NTabs v-model:value="activeTab" type="line" animated>
      <NTabPane name="prpd" tab="prpd">
        <div class="chart-container">
          <PrpdChart />
        </div>
      </NTabPane>
      <NTabPane name="prps" tab="prps">
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
}
.chart-container {
  /* width: 500px;
  height: 500px; */
}
</style>
