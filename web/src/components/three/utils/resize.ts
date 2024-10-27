import type { breakpointsAntDesign } from '@vueuse/core'

export type BreakPointsPresets = Map<keyof typeof breakpointsAntDesign, number[]>

export const SizePresets: BreakPointsPresets = new Map([
  ['xs', [200, 250]],
  ['sm', [390, 250]],
  ['md', [270, 300]],
  ['lg', [300, 250]],
  ['xl', [350, 300]],
  ['xxl', [450, 400]],
])
