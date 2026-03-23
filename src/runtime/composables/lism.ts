import { getLismPropsVue } from '../../components/Lism/useLism'
import type { LismOutput } from '../../components/Lism/useLism'

/**
 * Vue で使いやすい getLismProps util を Nuxt auto-import で提供。
 * auto-import 下で `useLismProps` や `getLismPropsVue` が直接利用可能になります。
 */
export function useLismProps(inputProps: Record<string, unknown>): LismOutput {
  return getLismPropsVue(inputProps)
}

export { getLismPropsVue }
export type { LismOutput }
