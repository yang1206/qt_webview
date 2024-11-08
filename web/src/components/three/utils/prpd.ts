// PRPD 数据点的类型定义
export interface PRPDPoint {
  phase: number // 相位角 (0-360°)
  amplitude: number // 放电幅值
  count: number // 放电次数
}

// PRPD 图表的配置参数
export interface PRPDConfig {
  phaseRange: [number, number] // 相位范围
  amplitudeRange: [number, number] // 幅值范围
  maxCount: number // 最大放电次数
  pointsPerFrame?: number // 每帧生成的点数
  // 放电特征参数
  phaseCenter: number[] // 放电相位中心点
  phaseSpread: number // 相位分布范围
  amplitudeMin: number // 最小放电幅值
  amplitudeMax: number // 最大放电幅值
}

// 默认配置
export const DEFAULT_PRPD_CONFIG: PRPDConfig = {
  phaseRange: [0, 360],
  amplitudeRange: [0, 50],
  maxCount: 10,
  pointsPerFrame: 3000,
  phaseCenter: [90, 270], // 典型的内部放电相位中心
  phaseSpread: 30, // 相位分布范围
  amplitudeMin: 10, // 最小放电幅值
  amplitudeMax: 40, // 最大放电幅值
}

// 数据生成器类
export class PRPDDataGenerator {
  constructor(private config: PRPDConfig = DEFAULT_PRPD_CONFIG) {}

  // 生成一帧数据
  generateFrame(): PRPDPoint[] {
    const points: PRPDPoint[] = []
    const { pointsPerFrame = 500 } = this.config

    for (let i = 0; i < pointsPerFrame; i++) {
      points.push(this.generatePoint())
    }
    return points
  }

  // 生成单个数据点
  private generatePoint(): PRPDPoint {
    // 随机选择一个相位中心
    const center = this.config.phaseCenter[Math.floor(Math.random() * this.config.phaseCenter.length)]

    // 生成相位值（正态分布）
    const phase = this.generateNormalValue(
      center,
      this.config.phaseSpread,
      this.config.phaseRange[0],
      this.config.phaseRange[1],
    )

    // 生成幅值（指数分布，更符合实际放电特征）
    const amplitude = this.generateExponentialValue(
      this.config.amplitudeMin,
      this.config.amplitudeMax,
    )

    // 生成放电次数（泊松分布，更符合离散事件特征）
    const count = this.generatePoissonValue(this.config.maxCount / 2)

    return { phase, amplitude, count }
  }

  private generateNormalValue(mean: number, stdDev: number, min: number, max: number): number {
    let value
    do {
      const u1 = Math.random()
      const u2 = Math.random()
      const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
      value = mean + stdDev * z
    } while (value < min || value > max)
    return value
  }

  private generateExponentialValue(min: number, max: number): number {
    const lambda = 1 / ((max - min) / 3) // 使分布的平均值在范围的1/3处
    const value = min - Math.log(1 - Math.random()) / lambda
    return Math.min(max, Math.max(min, value))
  }

  private generatePoissonValue(lambda: number): number {
    const L = Math.exp(-lambda)
    let k = 0
    let p = 1
    do {
      k++
      p *= Math.random()
    } while (p > L)
    return k - 1
  }
}
