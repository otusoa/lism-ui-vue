import type { PropValueTypes } from 'lism-css/lib/types/PropValueTypes'
import type { Component } from 'vue'
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
import type {
  TextAllowedTag,
  InlineAllowedTag,
  GroupAllowedTag,
  ListAllowedTag,
  ListItemAllowedTag,
  MediaAllowedTag,
} from 'lism-css/lib/types/allowedTags'

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
  TextAllowedTag,
  InlineAllowedTag,
  GroupAllowedTag,
  ListAllowedTag,
  ListItemAllowedTag,
  MediaAllowedTag,
}

/**
 * LismFlowコンポーネント用の値の型
 * 基本的な 's' | 'l' に加え、任意の文字列や数値を許容します。
 */
export type FlowValue = 's' | 'l' | ((string & {}) | number)

/**
 * LismCSS本家からインポートされた純粋なスタイリング・レイアウト用の基底プロパティ型
 * HTMLレンダリングに関連する属性（'as', 'tag' など）は含まれません。
 */
export type LismCoreBaseProps = Partial<PropValueTypes & StateProps & LayoutProps>

/**
 * LismCSSで用意されている標準のプロパティをまとめた型
 * 現在は LismCoreBaseProps へのエイリアスとして利用されています。
 */
export type LismCoreProps = LismCoreBaseProps

/**
 * プロジェクト内のほぼすべてのコンポーネント（LismBoxやLismCenterなど）のベースとなる型
 * スタイリング・レイアウトプロパティに加え、Vueでレンダリングするタグの指定などを含みます。
 */
export type LismBaseProps = LismCoreProps & {
  /**
   * レンダリングするHTML要素を指定します。'as' よりも優先して適用されます。
   */
  tag?: keyof HTMLElementTagNameMap | (string & {})
  /**
   * レンダリングするコンポーネントまたはHTML要素を指定します。
   */
  as?: keyof HTMLElementTagNameMap | (string & {}) | Component
  /**
   * LismCSSのバリアントクラスを指定します。
   */
  variant?: string
  /**
   * 独自のLismクラス（プレフィックス等を持つクラス）を追加で指定します。
   */
  lismClass?: string
  /**
   * Lism の解析を通さずに直接要素に流し込むための拡張プロパティです。
   */
  exProps?: Record<string, unknown>
}

/**
 * LismBaseProps を拡張し、任意の属性（class, style, data-* 等）を許容するインデックスシグネチャを持たせた型
 */
export type LismProps = LismBaseProps & {
  [key: string]: unknown
}

/**
 * LismUiDummy コンポーネント用のプロパティ型
 */
export type DummyProps = {
  /** レンダリングするコンポーネントまたは要素 */
  as?: string | object
  /** レンダリングするHTML要素 */
  tag?: string
  /** 画像のソースURL（asがimgなどの場合に使用） */
  src?: string
  /** コンテンツの幅 */
  width?: string | number
  /** コンテンツの高さ */
  height?: string | number
  /** 事前に定義されたテキストセット。 'lorem' など。 */
  pre?: string
  /** 出力するダミーコンテンツの長さ */
  length?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'codes' | (string & {})
  /** 出力するダミーコンテンツの言語 */
  lang?: 'ja' | 'en' | 'ar'
  /** 一部コンポーネントでコンテンツをずらす際に使用されるオフセット */
  offset?: number
}

// -------------------------------------------------------------------
// 各セマンティックラッパーごとの厳格な型定義
// -------------------------------------------------------------------

/**
 * LismText コンポーネント用のプロパティ型。
 * as プロパティを TextAllowedTag (例: 'p' | 'div' | 'blockquote' 等) に制限します。
 */
export type TextProps = LismBaseProps & { as?: TextAllowedTag }

/**
 * LismInline コンポーネント用のプロパティ型。
 * as プロパティを InlineAllowedTag (例: 'span' | 'strong' | 'em' 等) に制限します。
 */
export type InlineProps = LismBaseProps & { as?: InlineAllowedTag }

/**
 * LismGroup コンポーネント用のプロパティ型。
 * as プロパティを GroupAllowedTag (例: 'div' | 'section' | 'article' 等) に制限します。
 */
export type GroupProps = LismBaseProps & { as?: GroupAllowedTag }

/**
 * LismLink コンポーネント用のプロパティ型。
 * HTMLAnchorElement の標準的なプロパティ（href, target, rel, download）を LismBaseProps に追加します。
 */
export type LinkProps = LismBaseProps & {
  /** リンク先のURL */
  href?: string
  /** リンクを開く対象のウィンドウやフレーム (_blank など) */
  target?: string
  /** リンク先との関係性 (noopener noreferrer など) */
  rel?: string
  /** ダウンロードする際のファイル名またはダウンロードを指示する真偽値 */
  download?: unknown
}

/**
 * LismList コンポーネント用のプロパティ型。
 * as プロパティを ListAllowedTag (例: 'ul' | 'ol' | 'dl') に制限します。
 */
export type ListProps = LismBaseProps & { as?: ListAllowedTag }

/**
 * LismListItem コンポーネント用のプロパティ型。
 * as プロパティを ListItemAllowedTag (例: 'li' | 'dt' | 'dd') に制限します。
 */
export type ListItemProps = LismBaseProps & { as?: ListItemAllowedTag }

/**
 * LismMedia コンポーネント用のプロパティ型。
 * as プロパティを MediaAllowedTag (例: 'img' | 'video' | 'iframe' | 'picture') に制限します。
 */
export type MediaProps = LismBaseProps & { as?: MediaAllowedTag }

/**
 * LismHeading コンポーネント用のプロパティ型。
 * レベル(lv)を指定することで、対応するhタグ(h1~h6)を自動決定・サジェストします。
 */
export type HeadingProps = LismBaseProps & {
  /**
   * 見出しレベルを指定します。
   * 入力に基づく h1 〜 h6 タグのレンダリングに使用されます。
   */
  lv?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6'
}
