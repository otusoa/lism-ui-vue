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
  ColumnsProps,
  SwitchColsProps,
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
  ColumnsProps,
  SwitchColsProps,
}

// LismFlow用
export type FlowValue = 's' | 'l' | ((string & {}) | number)

// 定数を持つ基底プロパティ（ユニオン型などを含まない）
export type LismCoreBaseProps = Partial<PropValueTypes & StateProps & LayoutProps>

// Lism-CSSで用意されている標準のプロパティをまとめた型
export type LismCoreProps = LismCoreBaseProps

// 各コンポーネントで継承するための、標準的な属性を持つ基底型
export type LismBaseProps = LismCoreProps & {
  tag?: keyof HTMLElementTagNameMap | (string & {})
  as?: keyof HTMLElementTagNameMap | (string & {}) | unknown
  variant?: string
  lismClass?: string
  exProps?: Record<string, unknown>
}

// Lismが受け取れるプロパティの全容
export type LismProps = LismBaseProps & {
  [key: string]: unknown
}

export type DummyProps = {
  as?: string | object
  tag?: string
  src?: string
  width?: string | number
  height?: string | number
  pre?: string
  length?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'codes' | (string & {})
  lang?: 'ja' | 'en' | 'ar'
  offset?: number
}

// 各コンポーネント用の型定義
export type TextProps = LismBaseProps
export type InlineProps = LismBaseProps
export type GroupProps = LismBaseProps
export type LinkProps = LismBaseProps & {
  href?: string
  target?: string
  rel?: string
  download?: unknown
}
export type ListProps = LismBaseProps
export type ListItemProps = LismBaseProps
export type HeadingProps = LismBaseProps & {
  lv?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6'
}
