import type { PropValueTypes } from 'lism-css/lib/types/PropValueTypes'
import type { StateProps } from 'lism-css/lib/types/StateProps'
import type {
  LayoutProps,
  SideMainProps,
  FlexProps,
  StackProps,
  GridLayoutProps,
  ClusterProps,
  FrameProps,
  BoxProps,
  FlowLayoutProps,
  FluidColsProps,
} from 'lism-css/lib/types/LayoutProps'

export type {
  SideMainProps,
  FlexProps,
  StackProps,
  GridLayoutProps,
  ClusterProps,
  FrameProps,
  BoxProps,
  FlowLayoutProps,
  FluidColsProps,
}

export type FlowValue = 's' | 'l' | ((string & {}) | number)

// 定数を持つ基底プロパティ（ユニオン型などを含まない）
export type LismCoreBaseProps = Partial<PropValueTypes & StateProps & LayoutProps>

// Lism-CSSで用意されている標準のプロパティをまとめた型
export type LismCoreProps = LismCoreBaseProps

export type FilterName =
  | 'blur'
  | 'contrast'
  | 'brightness'
  | 'dropShadow'
  | 'grayscale'
  | 'hueRotate'
  | 'invert'
  | 'saturate'
  | 'sepia'

export type FilterProps = {
  [K in FilterName]?: string | number
}

// Lismが受け取れるプロパティの全容（Vueコンポーネント用）
export type LismProps = LismCoreProps &
  FilterProps & {
  tag?: keyof HTMLElementTagNameMap | (string & {})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: keyof HTMLElementTagNameMap | (string & {}) | Exclude<any, string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  class?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any // Any to accept Vue's string | object | array | null value for Vue styles
  lismClass?: string
  variant?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exProps?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

