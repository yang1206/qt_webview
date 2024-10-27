<script lang="ts" setup>
import { RGBmap } from './three/utils/color'
import { breakpointsAntDesign, useBreakpoints, useDebounceFn } from '@vueuse/core'
import { randomNormal, scaleLinear, scaleQuantile } from 'd3'
import * as THREE from 'three'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { createAxis, createGrid, createSine, createTriangle } from './three/utils/axis'
import { type BreakPointsPresets, SizePresets } from './three/utils/resize'
import RendererManager from './three/utils/three-renderer'

const props = withDefaults(defineProps<{
  width?: number
  height?: number
  autoresize?: boolean
  breackpoint?: BreakPointsPresets
}>(), {
  width: SizePresets.get('xxl')?.[0],
  height: SizePresets.get('xxl')?.[1],
})

const { active } = useBreakpoints(breakpointsAntDesign)
const activeBreakpoint = active()

const webgl = ref<HTMLCanvasElement>()

let rendererManager: RendererManager
let camera: THREE.OrthographicCamera
// let controls: OrbitControls

const aspect = computed(() => props.width / props.height)

const xVector = new THREE.Vector3(aspect.value * 2, 0, 0)
const yVector = new THREE.Vector3(0, aspect.value * 2, 0)
const oVector = new THREE.Vector3(0, 0, 0)
// const camera = new THREE.OrthographicCamera(0, aspect * 2, aspect * 2, 0, -1000, 1000)

const scene = new THREE.Scene()

const geometry = new THREE.PlaneGeometry(props.width, props.height)
const material = new THREE.MeshBasicMaterial({ color: '#323333', transparent: false, opacity: 0.1 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

scene.background = new THREE.Color('white')

// 创建网格
{
  const gridGeometry = createGrid(xVector.x, yVector.y, 20, 20)
  const grid = new THREE.LineSegments(
    gridGeometry,
    new THREE.LineBasicMaterial({
      color: '#808080',
      linewidth: 0.005,
      opacity: 0.7,
      transparent: true,
    }),
  )
  cube.add(grid)
}

// 创建坐标轴
{
  const xAxis = createAxis([oVector, xVector], {
    labelColor: '#A9AAAA',
    labelMax: 360,
    labelStep: 90,
    lineColor: '#A9AAAA',
    labelMin: 0,
    lineWidth: 0.02,
    showTick: true,
    showLabel: true,
    vector: 'x',
    maxXVector: xVector,
    maxYVector: yVector,
    labelFontSize: 1.4,
  })
  const xAxisLabel = xAxis.children.filter(c => c.name === 'axisLabel')[0]
  xAxisLabel.position.set(-0.05, -0.08, 0)
  const xArrow = createTriangle('right', 0.1, 'red')
  xArrow?.position.set(xVector.x, 0, 0)
  // xAxis.add(xArrow!)
  cube.add(xAxis)

  const yAxis = createAxis([oVector, yVector], {
    showLabel: true,
    labelColor: 'white',
    labelMax: -40,
    labelStep: 5,
    lineColor: '#A9AAAA',
    labelMin: -65,
    lineWidth: 0.02,
    showTick: true,
    vector: 'y',
    maxXVector: xVector,
    maxYVector: yVector,
  })
  const yAxisLabel = yAxis.children.filter(c => c.name === 'axisLabel')[0]
  yAxisLabel.position.set(-0.12, -0.03, 0)
  const yArrow = createTriangle('up', 0.1, 'green')
  yArrow?.position.set(0, yVector.y, 0)
  // yAxis.add(yArrow!)
  cube.add(yAxis)
}

const sine = createSine(xVector, yVector, 0.01, '#A9AAAA')
cube.add(sine)

// 输入数据范围
const phaseMin = 0 // 相位最小值
const phaseMax = 360 // 相位最大值
const amplitudeMin = 0 // 幅值最小值
const amplitudeMax = 50// 幅值最大值

// 确认最大的放电次数
const maxDischargeTimes = 10

// 创建D3 scale函数
const scaleX = scaleLinear()
  .domain([phaseMin, phaseMax])
  .range([0, xVector.x])

const scaleY = scaleLinear()
  .domain([amplitudeMin, amplitudeMax])
  .range([0, yVector.y])

const colorScale = scaleQuantile<string>()
  .domain([0, 1, 1])
  .range(RGBmap)

function generatePoints(xVector: THREE.Vector3, yVector: THREE.Vector3, numPoints = 1000) {
  const pointsMaterial = new THREE.PointsMaterial({
    size: 5,
    vertexColors: true, // 启用顶点颜色
  })

  const pointsGeometry = new THREE.BufferGeometry()
  const positions = new Float32Array(numPoints * 3)
  const colors = new Float32Array(numPoints * 3)
  const color = new THREE.Color()
  // 创建正态分布生成器
  const phaseDistribution = randomNormal((phaseMax + phaseMin) / 2, (phaseMax - phaseMin) / 12)
  const amplitudeDistribution = randomNormal((amplitudeMax + amplitudeMin) / 2, (amplitudeMax - amplitudeMin) / 12)
  for (let i = 0; i < numPoints; i++) {
    // 模拟数据
    let phase = phaseDistribution()
    let amplitude = amplitudeDistribution()
    const times = Math.floor(Math.random() * maxDischargeTimes)

    // 确保生成的相位和幅值在指定范围内
    phase = Math.max(phaseMin, Math.min(phaseMax, phase))
    amplitude = Math.max(amplitudeMin, Math.min(amplitudeMax, amplitude))

    const x = scaleX(phase)
    const y = scaleY(amplitude)

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = 0

    const intensity = times / maxDischargeTimes
    const colorStr = colorScale(intensity)
    color.set(colorStr)

    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  // 为每个散点加一个生命周期
  // const life = Array(numPoints).fill(100)
  pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  pointsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  // pointsGeometry.setAttribute('life', new THREE.Float32BufferAttribute(life, 1))

  return new THREE.Points(pointsGeometry, pointsMaterial)
}
// 使用散点函数
const points = generatePoints(xVector, yVector)
cube.add(points)

function updatePointsGeometry(points: THREE.Points<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.PointsMaterial, THREE.Object3DEventMap>, numRemove: number, numPoints = 1000) {
  const positions = points.geometry.getAttribute('position').array
  const colors = points.geometry.getAttribute('color').array
  const newPositions = new Float32Array(positions.length)
  const newColors = new Float32Array(colors.length)
  newPositions.set(positions.subarray(numRemove * 3))
  newColors.set(colors.subarray(numRemove * 3))

  // 添加新点以保持点的总数
  const newPoints = generatePoints(xVector, yVector, numPoints)
  const newPositionsArray = newPoints.geometry.getAttribute('position').array as Float32Array
  const newColorsArray = newPoints.geometry.getAttribute('color').array as Float32Array

  newPositions.set(newPositionsArray, positions.length - newPositionsArray.length)
  newColors.set(newColorsArray, colors.length - newColorsArray.length)

  // 更新几何体的属性
  points.geometry.setAttribute('position', new THREE.Float32BufferAttribute(newPositions, 3))
  points.geometry.setAttribute('color', new THREE.Float32BufferAttribute(newColors, 3))

  // 标记需要更新
  points.geometry.attributes.position.needsUpdate = true
  points.geometry.attributes.color.needsUpdate = true
}

function createCamera(): THREE.OrthographicCamera {
  const camera = new THREE.OrthographicCamera(-0.1, aspect.value * 2 + 0.1, aspect.value * 2 + 0.1, -0.1, -1000, 1000)
  return camera
}

const onResize = useDebounceFn((width: number, height: number) => {
  if (width <= 0 || height <= 0) {
    return false
  }
  else {
    rendererManager.setSize(width, height)
  }
}, 200)

watch(() => [props.width, props.height], () => {
  onResize(props.width, props.height)
}, { immediate: true })

watch(() => activeBreakpoint.value, () => {
  const breakPointPreset = new Map([...SizePresets, ...props?.breackpoint ?? []])

  const size = breakPointPreset.get(activeBreakpoint.value! as any)

  if (size && props.autoresize) {
    onResize(size[0], size[1])
  }
}, {
  immediate: true,
  deep: true,
})

onMounted(() => {
  if (!webgl.value)
    return
  camera = createCamera()
  rendererManager = new RendererManager(webgl.value, camera, {
    useControls: false,
    useGUI: false,
    useStats: false,
    antialias: true,
    powerPreference: 'high-performance',
  }, props.width, props.height)
  rendererManager.addObject(cube)
  setInterval(() => {
    updatePointsGeometry(points, 1000)
  }, 20)
  rendererManager.animate()
})

onBeforeUnmount(() => {
  if (rendererManager) {
    rendererManager.destroy()
  }
})
</script>

<template>
  <canvas ref="webgl" class="wh-full" />
</template>
