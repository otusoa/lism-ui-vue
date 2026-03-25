import { getLismPropsVue } from '../../core/lism-adapter'
import type { LismOutput } from '../../core/lism-adapter'
import type { LismProps } from '../../core/types'

/**
 * Vue で使いやすい getLismProps util を Nuxt auto-import で提供。
 * auto-import 下で `useLismProps` や `getLismPropsVue` が直接利用可能になります。
 */
export function useLismProps(inputProps: LismProps): LismOutput {
  return getLismPropsVue(inputProps)
}

export { getLismPropsVue }
export type { LismOutput }
