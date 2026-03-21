import type { PropValueTypes } from 'lism-css/lib/types/PropValueTypes'
import type { StateProps } from 'lism-css/lib/types/StateProps'

// Lismが受け取れるプロパティの全容（型定義用）
export type LismProps = PropValueTypes &
  StateProps & {
    as?: string | object
    class?: unknown
    style?: unknown
    lismClass?: string
    variant?: string
    [key: string]: unknown
  }
