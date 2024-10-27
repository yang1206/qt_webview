import type {
  Camera,
  Object3D,
  PerspectiveCamera,
  WebGLRendererParameters,
} from 'three'
import GUI from 'lil-gui'
import {
  Scene,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/jsm/libs/stats.module.js'

interface ResizeCallback {
  (width: number, height: number): void
}
interface RendererOptions extends WebGLRendererParameters {
  windowSize?: boolean
  autoSize?: boolean
  useControls?: boolean
  useGUI?: boolean
  useStats?: boolean
}

class RendererManager {
  public renderer: WebGLRenderer
  public camera: Camera
  public scene: Scene
  public customAnimate?: () => void
  public controls?: OrbitControls
  public canvas: HTMLCanvasElement
  private windowSize: boolean
  private autoSize: boolean
  private gui?: GUI
  private stats?: Stats
  private frameId?: number
  private resizeCallbacks: ResizeCallback[]
  /**
   * 负责初始化渲染器管理器。
   *
   * @param canvas - 用于渲染的 HTML 画布元素。
   * @param camera - 用于渲染的摄像机对象。
   * @param options - 一个可选的 RendererOptions 对象，包含渲染器的配置。如果未提供，将使用默认值。
   * @param width - 渲染器的宽度。如果未提供，将根据 canvas 的 clientWidth 属性或窗口的 innerWidth 属性来确定。
   * @param height - 渲染器的高度。如果未提供，将根据 canvas 的 clientHeight 属性或窗口的 innerHeight 属性来确定。
   */
  constructor(
    canvas: HTMLCanvasElement,
    camera: Camera,
    options: RendererOptions = {},
    width?: number,
    height?: number,
    scene?: Scene,

  ) {
    this.canvas = canvas
    this.camera = camera
    this.windowSize = options.windowSize || false
    this.autoSize = options.autoSize || false
    this.scene = scene || new Scene()
    this.resizeCallbacks = []

    this.renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      ...options,
    })

    this.initSize(width, height)

    if (this.windowSize) {
      window.addEventListener('resize', this.onWindowResize.bind(this))
    }

    if (this.autoSize && canvas.parentElement) {
      window.addEventListener('resize', this.onParentResize.bind(this))
    }

    if (options.useControls) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.enableDamping = true
      this.controls.minDistance = 10
      this.controls.maxDistance = 20
    }

    if (options.useGUI) {
      this.gui = new GUI()
    }

    if (options.useStats) {
      this.stats = new Stats()
      this.stats.showPanel(0)
      document.body.appendChild(this.stats.dom)
    }
  }

  private initSize(width?: number, height?: number) {
    if (this.windowSize) {
      this.setSize(window.innerWidth, window.innerHeight)
    }
    else if (this.autoSize && this.canvas.parentElement) {
      this.setSize(this.canvas.parentElement.clientWidth, this.canvas.parentElement.clientHeight)
    }
    else if (width && height) {
      this.setSize(width, height)
    }
    else {
      this.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
    }
  }

  public setSize(width: number, height: number) {
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    if ('aspect' in this.camera) {
      (this.camera as PerspectiveCamera).aspect = width / height;
      (this.camera as PerspectiveCamera).updateProjectionMatrix()
    }
    this.resizeCallbacks.forEach(callback => callback(width, height))
  }

  private onWindowResize() {
    this.setSize(window.innerWidth, window.innerHeight)
  }

  private onParentResize() {
    const parent = this.canvas.parentElement
    if (parent) {
      this.setSize(parent.clientWidth, parent.clientHeight)
    }
  }

  public animate() {
    this.renderer.render(this.scene, this.camera)
    this.frameId = requestAnimationFrame(() => this.animate())
    if (this.customAnimate) {
      this.customAnimate()
    }
    if (this.controls) {
      this.controls.update()
    }
    if (this.stats) {
      this.stats.begin()
    }
    if (this.stats) {
      this.stats.end()
    }
  }

  public addObject(object: Object3D) {
    this.scene.add(object)
  }

  public addResizeCallback(callback: ResizeCallback) {
    this.resizeCallbacks.push(callback)
  }

  public destroy() {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId)
    }

    this.renderer.dispose()
    window.removeEventListener('resize', this.onWindowResize.bind(this))
    window.removeEventListener('resize', this.onParentResize.bind(this))

    if (this.controls) {
      this.controls.dispose()
    }

    if (this.gui) {
      this.gui.destroy()
    }

    if (this.stats) {
      document.body.removeChild(this.stats.dom)
    }
  }
}

export default RendererManager
