import { BufferGeometry, Color, ExtrudeGeometry, Group, Mesh, MeshBasicMaterial, Shape, Vector2, Vector3 } from 'three'
// import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { MeshLine, MeshLineGeometry, MeshLineMaterial } from '@lume/three-meshline'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
/**
 * @description 创建网格
 */
export function createGrid(width = 1, height = 1, wSeg = 1, hSeg = 1, lExt = [0, 0], rot = ['x', 0]) {
  const seg = new Vector2(width / wSeg, height / hSeg)
  const hlfSeg = seg.clone().multiplyScalar(0.5)

  const axis = rot[0] === 'x' ? new Vector3(1, 0, 0) : new Vector3(0, 1, 0)
  const rotAngle = rot[1] as any
  const pts: Vector3[] = []

  for (let y = 0; y <= hSeg; y++) {
    pts.push(
      new Vector3(0, y * seg.y, 0).applyAxisAngle(axis, rotAngle),
      new Vector3(width + (hlfSeg.x * lExt[0]), y * seg.y, 0).applyAxisAngle(axis, rotAngle),
    )
  }

  for (let x = 0; x <= wSeg; x++) {
    pts.push(
      new Vector3(x * seg.x, 0, 0).applyAxisAngle(axis, rotAngle),
      new Vector3(x * seg.x, height + (hlfSeg.y * lExt[1]), 0).applyAxisAngle(axis, rotAngle),
    )
  }

  return new BufferGeometry().setFromPoints(pts)
}

/**
 * @description 创建正弦波
 */
export function createSine(xVector: Vector3, yVector: Vector3, lineWidth = 0.01, color = '#0000ff') {
  const waveLength = 10 // 定义正弦波的长度
  const amplitude = 1 // 定义正弦波的振幅为1，后面会根据区间长度缩放
  const material = new MeshLineMaterial({
    color,
    lineWidth,
  } as any) // 材质

  const points: Vector3[] = []
  const geometry = new MeshLineGeometry()

  const dx = 0.01 / waveLength // x 轴上的步长，这样x在[0, 1]的范围内将会产生一整个正弦周期

  for (let x = 0; x <= 1; x += dx) {
    const y = Math.sin(x * 2 * Math.PI) * amplitude // y 在[-1, 1]区间变化
    const scaledX = x * xVector.x // x 坐标对应区间长度进行缩放
    const scaledY = (y * 0.5 + 0.5) * yVector.y // y 坐标映射到 [0, yVector.y] 区间
    points.push(new Vector3(scaledX, scaledY, 0))
  }

  geometry.setPoints(points)
  return new MeshLine(geometry, material)
}

// 创建三角形箭头
export function createTriangle(direction: 'up' | 'down' | 'left' | 'right' | 'front' | 'back', size: number, color: string) {
  const triangleShape = new Shape()

  // 根据方向, 定义三角形的顶点
  switch (direction) {
    case 'up':
      triangleShape.moveTo(0, size)
      triangleShape.lineTo(-size / 2, -size / 2)
      triangleShape.lineTo(size / 2, -size / 2)
      triangleShape.lineTo(0, size)
      break
    case 'down':
      triangleShape.moveTo(0, -size)
      triangleShape.lineTo(-size / 2, size / 2)
      triangleShape.lineTo(size / 2, size / 2)
      triangleShape.lineTo(0, -size)
      break
    case 'left':
      triangleShape.moveTo(-size, 0)
      triangleShape.lineTo(size / 2, -size / 2)
      triangleShape.lineTo(size / 2, size / 2)
      triangleShape.lineTo(-size, 0)
      break
    case 'right':
      triangleShape.moveTo(size, 0)
      triangleShape.lineTo(-size / 2, -size / 2)
      triangleShape.lineTo(-size / 2, size / 2)
      triangleShape.lineTo(size, 0)
      break
    case 'front':
      triangleShape.moveTo(0, size / 2)
      triangleShape.lineTo(-size / 2, -size / 2)
      triangleShape.lineTo(size / 2, -size / 2)
      triangleShape.lineTo(0, size / 2)
      break
    case 'back':
      triangleShape.moveTo(0, -size / 2)
      triangleShape.lineTo(-size / 2, size / 2)
      triangleShape.lineTo(size / 2, size / 2)
      triangleShape.lineTo(0, -size / 2)
      break
    default:
      console.error('Invalid direction. Choices are \'up\', \'down\', \'left\', \'right\'.')
      return
  }

  const geometry = new ExtrudeGeometry(triangleShape, {
    steps: 1,
    depth: 0.1,
    bevelEnabled: false,
  })

  const material = new MeshBasicMaterial({ color })

  const triangle = new Mesh(geometry, material)

  switch (direction) {
    case 'front':
      triangle.rotation.x = Math.PI / 2
      break
    case 'back':
      triangle.rotation.x = Math.PI / 2
      break
  }
  return triangle
}

// export function createTextTexture(message: string, color = 'black', fontSize = 14) {
//   const canvas = document.createElement('canvas')
//   const context = canvas.getContext('2d')
//   // 设置 context 的字体
//   context!.font = `${fontSize}px Arial`

//  // 再次设置新的 canvas 的字体
//   context!.textBaseline = 'middle'
//   // context!.textAlign = 'center'
//   context!.fillStyle = color
//   context!.fillText(message, 0, 50)

//   const texture = new CanvasTexture(canvas)
//   return texture
// }

export function createText(message: string, color = 'black', fontSize = 1.2): Promise<Mesh> {
  return new Promise((resolve) => {
    const loader = new FontLoader()

    loader.load('/font/han_serif_light.json', (font) => {
      const textGeometry = new TextGeometry(message, {
        font,
        bevelEnabled: true,
        depth: 0.1,
        bevelSegments: 5,
        curveSegments: 12,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
      })

      textGeometry.computeBoundingBox()
      const textWidth = textGeometry.boundingBox!.max.x - textGeometry.boundingBox!.min.x

      const textMaterial = new MeshBasicMaterial({ color })
      const textMesh = new Mesh(textGeometry, textMaterial)

      textMesh.position.set(-textWidth / 2, 0, 0) // 居中显示
      textMesh.scale.set(fontSize / 2000, fontSize / 2000, fontSize / 2000)
      resolve(textMesh)
    })
  })
}

interface AxisOptionsBase {
  showLabel: boolean
  showTick?: boolean
  lineColor?: string
  lineWidth?: number
}

interface AxisOptionsWithLabel extends AxisOptionsBase {
  showLabel: true
  vector: 'x' | 'y' | 'z'
  maxXVector: Vector3
  maxYVector: Vector3
  labelColor?: string
  labelMax: number
  labelMin: number
  labelStep: number
  labelFontSize?: number
}

interface AxisOptionsWithoutLabel extends AxisOptionsBase {
  showLabel: false
}

interface AxisOptionsWithTick extends AxisOptionsWithLabel {
  showTick?: true
  tickLineWidth?: number
  tickLineColor?: string
}

interface AxisOptionsWithoutTick extends AxisOptionsWithoutLabel {
  showTick?: false
}

type AxisOptions = AxisOptionsWithLabel | AxisOptionsWithoutLabel | AxisOptionsWithTick | AxisOptionsWithoutTick
const axisInitOptions: AxisOptions = {
  labelColor: 'black',
  labelMax: 10,
  labelMin: 0,
  labelStep: 1,
  lineColor: 'black',
  lineWidth: 1,
  showLabel: true,
  showTick: true,
  vector: 'x',
  maxXVector: new Vector3(10, 0, 0),
  maxYVector: new Vector3(0, 10, 0),
  tickLineWidth: 0.005,
  tickLineColor: 'grey',
}

/**
 * @description 创建坐标轴
 * @param points Vector3[]
 * @param axisOption AxisOptions
 */
export function createAxis(points: Vector3[], axisOption: AxisOptions) {
  const options = { ...axisInitOptions, ...axisOption }
  const axis = new Group()
  const axisLabel = new Group()
  axisLabel.name = 'axisLabel'
  const axisTick = new Group()
  axisTick.name = 'axisTick'

  if (options.showLabel) {
    for (let i = options.labelMin; i <= options.labelMax; i += options.labelStep) {
      // 根据输入的向量均匀设置刻度的位置
      const t = (i - options.labelMin) / (options.labelMax - options.labelMin) // 计算当前刻度值占总刻度的比例

      const position = new Vector3().lerpVectors(points[0], points[1], t)

      if (options.showTick) {
        const tickOptions = options as AxisOptionsWithTick
        if (!((tickOptions.vector === 'y' && position.y === 0) || (tickOptions.vector === 'x' && position.x === 0))) {
          // 使用 MeshLine 来绘制刻度线
          const lineGeometry = new MeshLineGeometry()
          lineGeometry.setPoints(tickOptions.vector === 'x'
            ? [
              position,
              new Vector3(position.x, tickOptions.maxYVector.y),
            ]
            : [new Vector3(0, position.y), new Vector3(tickOptions.maxXVector.x, position.y)])
          const lineMaterial = new MeshLineMaterial({
            color: new Color(tickOptions.tickLineColor),
            lineWidth: tickOptions.tickLineWidth!,
          } as any)
          const line = new MeshLine(lineGeometry, lineMaterial)
          axisTick.add(line)
        }
      }

      createText(i.toString(), options.labelColor, options.labelFontSize).then((text) => {
        text.position.copy(position)
        axisLabel.add(text)
      })

      // if (options.showLabel) {

      // const material = new SpriteMaterial({ map: texture })
      // const sprite = new Sprite(material)

      // sprite.center.set(0, 0)
      // sprite.position.set(position.x, position.y, 0)
      // }
    }
  }

  const axisGeometry = new MeshLineGeometry()
  // TODO 最新版有一个问题，至少传三个点才能渲染出线  meshline库
  axisGeometry.setPoints(points)
  const lineMaterial = new MeshLineMaterial({
    color: new Color(options.lineColor),
    lineWidth: options.lineWidth!,
    // resolution: new Vector2(sizes.width, sizes.height),
    sizeAttenuation: true,
  } as any)

  const axisLine = new Mesh(axisGeometry, lineMaterial)
  axis.add(axisLine)
  axis.add(axisTick)
  axis.add(axisLabel)
  return axis
}
