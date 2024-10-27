<script lang="ts" setup>
import type { Scene } from 'three'
import { RGBmap } from '@/components/three/utils/color'
import { breakpointsAntDesign, useBreakpoints, useDebounceFn } from '@vueuse/core'
import * as d3 from 'd3'
import { BufferAttribute, BufferGeometry, Color, Group, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, PerspectiveCamera, Vector3 } from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { createAxis, createGrid, createSine, createTriangle } from './three/utils/axis'
import { type BreakPointsPresets, SizePresets } from './three/utils/resize'
import RendererManager from './three/utils/three-renderer'

const props = withDefaults(defineProps<{
  autoresize?: boolean
  breackpoint?: BreakPointsPresets
}>(), {
})

const size = computed(() => {
  return props.breackpoint
    ? {
        width: props.breackpoint.get('xxl')?.[0],
        height: props.breackpoint.get('xxl')?.[1],
      }
    : {
        width: SizePresets.get('xxl')?.[0],
        height: SizePresets.get('xxl')?.[1],
      }
})

const { active } = useBreakpoints(breakpointsAntDesign)
const activeBreakpoint = active()

const stats = new Stats()

stats.showPanel(0)
// 设置监视器位置
stats.dom.style.position = 'absolute'
stats.dom.style.left = '0px'
stats.dom.style.top = '0px'

const webgl = ref<HTMLCanvasElement>()
let rendererManager: RendererManager

let camera: PerspectiveCamera
const xVector = new Vector3(6, 0, 0)
const yVector = new Vector3(0, 6, 0)
const zVector = new Vector3(0, 0, 5)
const oVector = new Vector3(0, 0, 0)

let scene: Scene
const group = new Group()

const g1 = createGrid(xVector.x, yVector.y, 10, 10, [0, 0])
const m1 = new LineBasicMaterial({ color: '#A9AAAA' })
const grid1 = new LineSegments(g1, m1)

const sine = createSine(xVector, yVector, 0.1, '#CDCECE')
grid1.add(sine)
group.add(grid1)

const g2 = createGrid(xVector.x, zVector.z, 15, 15, [0, 0], ['x', Math.PI * 0.5])
const m2 = new LineBasicMaterial({ color: '#A9AAAA' })
const grid2 = new LineSegments(g2, m2)
group.add(grid2)

const xAxis = createAxis([zVector, new Vector3(xVector.x, 0, zVector.z)], {
  labelColor: '#A9AAAA',
  labelMax: 360,
  labelStep: 90,
  lineColor: '#A9AAAA',
  labelMin: 0,
  labelFontSize: 5,
  lineWidth: 0,
  showLabel: true,
  showTick: true,
  vector: 'x',
  maxXVector: zVector,
  maxYVector: new Vector3(xVector.x, 0, zVector.z),

})

// const xArrow = createTriangle('right', 0.3, 'yellow')
const xAxisLabel = xAxis.children.filter(c => c.name === 'axisLabel')[0]
xAxisLabel.position.set(-0.1, 0, 0)
// xArrow?.position.set(xVector.x, 0, zVector.z - 0.05)
// xAxis.add(xArrow!)

const yAxis = createAxis([oVector, yVector], {
  lineColor: '#A9AAAA',
  lineWidth: 0.1,
  showLabel: true,
  labelMax: -20,
  labelMin: -65,
  labelStep: 10,
  labelFontSize: 5,
  labelColor: '#A9AAAA',
  vector: 'y',
  maxXVector: oVector,
  maxYVector: yVector,
})
const yAxisLabel = yAxis.children.filter(c => c.name === 'axisLabel')[0]
yAxisLabel.position.set(-0.5, 0, 0)
const yArrow = createTriangle('up', 0.3, 'red')
yArrow?.position.set(0, yVector.y, -0.05)
// yAxis.add(yArrow!)

const zAxis = createAxis([oVector, zVector], {
  lineColor: '#A9AAAA',
  lineWidth: 0.1,
  showLabel: false,
})
const zAxisLabel = zAxis.children.filter(c => c.name === 'axisLabel')[0]
zAxisLabel.position.set(-0.5, 0, 0)
zAxisLabel.rotation.set(0, 0, Math.PI * 4)
const zArrow = createTriangle('front', 0.3, 'blue')
zArrow?.position.set(0, 0.05, zVector.z)
// zAxis.add(zArrow!)

const bars = new Group()

const colorScale = d3.scaleQuantile<string>()
  .domain([0, 5])
  .range(RGBmap)

function createBarChart(data: number[]) {
  const barWidth = 0.01
  const zPosition = 5 // 如果需要动态调整，可以考虑将zPosition作为函数参数

  const xScale = d3.scaleLinear()
    .domain([0, data.length])
    .range([0, 6])

  const heightScale = d3.scaleLinear()
    .domain([0, 5])
    .range([0, 5])

  const numBars = data.length
  const positions = new Float32Array(numBars * 8 * 3)
  const colors = new Float32Array(numBars * 8 * 3)
  const indices = new Uint32Array(numBars * 12 * 3)
  const color = new Color()

  let posIndex = 0
  let colorIndex = 0
  let indexIndex = 0

  data.forEach((value, idx) => {
    const x = xScale(idx)
    const y = 0
    const height = heightScale(value)
    const baseIndex = idx * 8

    // 定义柱子的八个顶点
    const vertices = [
      [x, y, zPosition],
      [x + barWidth, y, zPosition],
      [x + barWidth, y + height, zPosition],
      [x, y + height, zPosition],
      [x, y, zPosition + barWidth],
      [x + barWidth, y, zPosition + barWidth],
      [x + barWidth, y + height, zPosition + barWidth],
      [x, y + height, zPosition + barWidth],
    ]

    // 填充顶点坐标到positions数组
    for (const vertex of vertices) {
      positions[posIndex++] = vertex[0]
      positions[posIndex++] = vertex[1]
      positions[posIndex++] = vertex[2]

      const colorStr = colorScale(value)
      color.set(colorStr)
      colors[colorIndex++] = color.r
      colors[colorIndex++] = color.g
      colors[colorIndex++] = color.b
    }

    // 填充索引到indices数组

    const faces = [
      3,
      2,
      1,
      3,
      1,
      0, // 前面
      4,
      5,
      6,
      4,
      6,
      7, // 后面
      3,
      7,
      6,
      3,
      6,
      2, // 顶部
      0,
      1,
      5,
      0,
      5,
      4, // 底部
      0,
      4,
      7,
      0,
      7,
      3, // 左面
      1,
      2,
      6,
      1,
      6,
      5, // 右面
    ]
    for (let i = 0; i < faces.length; i += 3) {
      indices[indexIndex++] = baseIndex + faces[i]
      indices[indexIndex++] = baseIndex + faces[i + 1]
      indices[indexIndex++] = baseIndex + faces[i + 2]
    }
  })

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))
  geometry.setAttribute('color', new BufferAttribute(colors, 3))
  geometry.setIndex(new BufferAttribute(indices, 1))
  geometry.computeVertexNormals()

  const material = new MeshBasicMaterial({ vertexColors: true })
  const bar = new Mesh(geometry, material)
  return bar
}

function generateRandomData() {
  const randomNormal = d3.randomNormal(2.1, 1) // 均值为2.5，标准差为1.5
  return Array.from({ length: 50 }, () => Math.min(4.5, Math.max(0, randomNormal())))
}

function removeBars() {
  bars.children.forEach((bar) => {
    if (bar.position.z < -5)
      bars.remove(bar)
  })
}

// 定期更新z位置
function updateBarPositions() {
  bars.children.forEach((bar) => {
    bar.position.z -= 0.01
  })
}

function createCamera(): PerspectiveCamera {
  const camera = new PerspectiveCamera(45, size.value?.width! / size.value?.height!, 1, 1000)
  camera.position.setScalar(9)
  camera.position.z = 8

  return camera
}

function addObject() {
  const objs = [xAxis, yAxis, zAxis, bars]
  if (rendererManager) {
    objs.forEach((obj) => {
      rendererManager.addObject(obj)
    })
  }
}
onMounted(() => {
  if (!webgl.value)
    return
  camera = createCamera()
  rendererManager = new RendererManager(webgl.value, camera, {
    useControls: true,
    useGUI: false,
    useStats: false,
    antialias: false,
    powerPreference: 'high-performance',
  }, size.value?.width!, size.value?.height!)
  scene = rendererManager.scene
  scene.background = new Color('#323333')
  rendererManager.addObject(group)
  addObject()
  rendererManager.customAnimate = () => {
    // 移除不需要的柱子
    removeBars()

    // 更新柱子位置
    updateBarPositions()
  }

  setInterval(() => {
    const newData = generateRandomData()

    bars.add(createBarChart(newData))
  }, 100)

  rendererManager.animate()
})

const onResize = useDebounceFn((width = size.value?.width, height = size.value?.height) => {
  rendererManager.setSize(width, height)
}, 200)

watch(() => size, () => {
  onResize(size.value?.width, size.value?.height)
}, { immediate: true })

watch(() => activeBreakpoint, () => {
  const breakPointPreset = new Map([...SizePresets, ...props?.breackpoint! ?? []])
  const size = breakPointPreset.get(activeBreakpoint.value! as any)
  if (size && props.autoresize) {
    onResize(size[0], size[1])
  }
}, {
  immediate: true,
  deep: true,
})

onBeforeUnmount(() => {
  rendererManager.destroy()
})
</script>

<template>
  <canvas ref="webgl" class="wh-full" />
</template>
