import type { PropValueTypes } from 'lism-css/lib/types/PropValueTypes'
import type { StateProps } from 'lism-css/lib/types/StateProps'

// Lismが受け取れるプロパティの全容（型定義用）
export type LismProps = PropValueTypes &
  StateProps & {
    tag?: keyof HTMLElementTagNameMap | (string & {})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    as?: keyof HTMLElementTagNameMap | (string & {}) | Exclude<any, string>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    class?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: string | Record<string, any> | any[]
    lismClass?: string
    variant?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    exProps?: Record<string, any>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
