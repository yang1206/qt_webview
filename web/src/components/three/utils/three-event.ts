import type { Camera, Intersection, Object3D, Scene } from 'three'
import { EventDispatcher, Raycaster, Vector2 } from 'three'

export interface TEventManagerParameters {
  dom: HTMLCanvasElement
  scene: Scene
  camera: Camera
}

interface EventMap<T = Record<string, any>> {
  mousedown: { intersection: Intersection<Object3D>[], [key: string]: any } | T
  mousemove: { intersection: Intersection<Object3D>[] } | T
  mouseup: { intersection: Intersection<Object3D>[] } | T
  click: { intersection: Intersection<Object3D>[] } | T
}

export class ThreeEventManager<T> extends EventDispatcher<EventMap<T>> {
  private raycaster: Raycaster = new Raycaster()
  private mouse: Vector2 = new Vector2()
  private scene: Scene
  private camera: Camera
  private cacheObject: Object3D | null = null
  private dom: HTMLCanvasElement

  constructor(params: TEventManagerParameters) {
    super()

    this.scene = params.scene
    this.camera = params.camera
    this.dom = params.dom

    this.addEventListeners()
  }

  private addEventListeners() {
    const dom = this.dom

    dom.addEventListener('mousedown', this.onMouseDown.bind(this))
    dom.addEventListener('mousemove', this.onMouseMove.bind(this))
    dom.addEventListener('mouseup', this.onMouseUp.bind(this))
    dom.addEventListener('click', this.onClick.bind(this))
  }

  private onMouseDown(_event: MouseEvent) {
    const intersection = this.getIntersections()
    this.dispatchEvent({ type: 'mousedown', intersection })

    if (intersection.length) {
      const object = intersection[0].object
      object.dispatchEvent<any>({ type: 'mousedown' })
    }
  }

  private onMouseMove(event: MouseEvent) {
    this.updateMousePosition(event)

    const intersection = this.getIntersections()
    this.dispatchEvent({ type: 'mousemove', intersection })

    if (intersection.length) {
      const object = intersection[0].object

      if (object !== this.cacheObject) {
        if (this.cacheObject) {
          this.cacheObject.dispatchEvent<any>({ type: 'mouseleave' })
        }
        object.dispatchEvent<any>({ type: 'mouseenter' })
      }
      else {
        object.dispatchEvent<any>({ type: 'mousemove' })
      }
      this.cacheObject = object
    }
    else {
      if (this.cacheObject) {
        this.cacheObject.dispatchEvent<any>({ type: 'mouseleave' })
        this.cacheObject = null
      }
    }
  }

  private onMouseUp(_event: MouseEvent) {
    const intersection = this.getIntersections()
    this.dispatchEvent({ type: 'mouseup', intersection })

    if (intersection.length) {
      const object = intersection[0].object
      object.dispatchEvent<any>({ type: 'mouseup' })
    }
  }

  private onClick(_event: MouseEvent) {
    const intersection = this.getIntersections()
    this.dispatchEvent({ type: 'click', intersection })

    if (intersection.length) {
      const object = intersection[0].object
      object.dispatchEvent<any>({ type: 'click' })
    }
  }

  private updateMousePosition(event: MouseEvent) {
    const rect = this.dom.getBoundingClientRect()
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  }

  private getIntersections(): Intersection<Object3D>[] {
    this.raycaster.setFromCamera(this.mouse, this.camera)
    return this.raycaster.intersectObjects(this.scene.children)
  }

  public override addEventListener<T extends keyof EventMap>(type: T, listener: any) {
    super.addEventListener(type, listener)
  }
}
