/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @file LismプロパティをVue用に変換するためのユーティリティ
 */
import { STATES, PROPS } from 'lism-css/config'
import getLayoutProps from 'lism-css/lib/getLayoutProps'
import isPresetValue from 'lism-css/lib/isPresetValue'
import isTokenValue from 'lism-css/lib/isTokenValue'
import getUtilKey from 'lism-css/lib/getUtilKey'
import getMaybeCssVar from 'lism-css/lib/getMaybeCssVar'
import getBpData from 'lism-css/lib/getBpData'
import splitWithComma from 'lism-css/lib/helper/splitWithComma'

// isEmptyObj / filterEmptyObj の簡易実装
const isEmptyObj = (obj: Record<string, unknown>) => Object.keys(obj).length === 0

/**
 * Lismが最終的に要素にバインドする属性の型
 */
export interface LismOutput {
  /** 適用されるCSSクラスの配列 */
  class: string[]
  /** 適用されるインラインスタイルのオブジェクト */
  style: Record<string, string | number>
  /** その他のHTML属性 */
  [key: string]: unknown
}

/**
 * プロパティ名から対応するトークンキーを取得する
 */
const getTokenKey = (propName: string) => {
  const config = (PROPS as any)[propName]
  return (config && config.token) || ''
}

/**
 * 引数として渡されたプロパティ群を解析し、Vueで利用可能な class, style, attrs に変換する。
 * lism-css の getLismProps (React向け) を Vue.js 用に再実装したものです。
 *
 * @param inputProps - コンポーネントに渡された全属性 (props + attrs)
 * @returns Vueの v-bind に渡せるオブジェクト
 */
export function getLismPropsVue(inputProps: Record<string, any>): LismOutput {
  if (isEmptyObj(inputProps)) {
    return { class: [], style: {} }
  }

  const { layout, ...restInput } = inputProps
  const props = getLayoutProps(layout, restInput)

  const uClasses: string[] = []
  const lismState: string[] = []
  const styles: Record<string, string | number> = {}
  const attrs: Record<string, any> = {}

  // baseクラスの生成 (lismClassとvariant)
  const baseClasses: string[] = []
  if (props.class) baseClasses.push(props.class as string)
  if (props.className) baseClasses.push(props.className as string)

  let mainClass = (props.lismClass as string) || ''
  if (props.variant && mainClass) {
    const arr = mainClass.split(' ')
    const first = arr[0]
    const variantClass = `${first}--${props.variant}`
    mainClass = [first, variantClass, ...arr.slice(1)].join(' ')
  }
  if (mainClass) baseClasses.push(mainClass)

  delete props.class
  delete props.className
  delete props.lismClass
  delete props.variant

  // _propConfig や style などの抽出
  const inlineStyle = (props.style as Record<string, any>) || {}
  const _propConfig = (props._propConfig as Record<string, any>) || {}
  delete props.style
  delete props._propConfig

  Object.assign(styles, inlineStyle)

  // ヘルパー関数群
  const addUtil = (u: string) => uClasses.push(u)
  const addStyle = (k: string, v: string | number) => {
    styles[k] = v
  }

  /**
   * 単一のプロップを解析し、クラスまたはスタイルへ振り分ける。
   * レスポンシブ指定の各ブレイクポイントに対しても再帰的に呼び出されます。
   */
  const setAttrs = (propName: string, val: any, config: any = {}, bp: string = '') => {
    if (val == null || val === '' || val === false) return

    let varName = `--${propName}`
    let utilName = `-${String(config.utilKey || propName)}`

    if (bp) {
      varName = `--${propName}_${bp}`
      utilName += `_${bp}`
    }

    if (typeof val === 'string' && val.startsWith(':')) {
      addUtil(`${utilName}:${val.replace(':', '')}`)
      return
    }

    if (!bp) {
      const { presets, tokenClass, utils, shorthands } = config
      if (presets && isPresetValue(presets, val)) {
        const u = typeof val === 'string' || typeof val === 'number' ? String(val) : ''
        if (u) addUtil(`${utilName}:${u}`)
        return
      }
      if (tokenClass && config.token && isTokenValue(config.token, val)) {
        const u = typeof val === 'string' || typeof val === 'number' ? String(val) : ''
        if (u) addUtil(`${utilName}:${u}`)
        return
      }
      let uKey = ''
      if (utils && typeof val === 'string') uKey = getUtilKey(utils, val)
      if (!uKey && shorthands && typeof val === 'string') uKey = getUtilKey(shorthands, val, true)
      if (uKey) {
        addUtil(`${utilName}:${uKey}`)
        return
      }
    }

    if (val === true || val === '-') {
      addUtil(utilName)
      return
    }

    const { prop, isVar, alwaysVar, token, bp: bpSupport } = config
    let finalVal: string | number
    if (token && (typeof val === 'string' || typeof val === 'number')) {
      finalVal = getMaybeCssVar(val, token)
    } else if (typeof val === 'string' || typeof val === 'number') {
      finalVal = val
    } else {
      finalVal = JSON.stringify(val)
    }

    if (!bp) {
      if (isVar) {
        addStyle(`--${propName}`, finalVal)
        return
      } else if (!bpSupport && !alwaysVar) {
        addStyle(prop, finalVal)
        return
      }
    }

    addUtil(utilName)
    addStyle(varName, finalVal)
  }

  /**
   * 状態プロップ (is-wrapper 等) を解析し、状態クラスへ振り分ける。
   */
  const analyzeState = (stateConfig: any, val: any) => {
    const { className, preset, presetClass, customVar, tokenKey, setStyles } = stateConfig
    if (val === true) {
      lismState.push(className)
    } else if (preset && isPresetValue(preset, val)) {
      lismState.push(`${className} ${presetClass}:${String(val)}`)
    } else if (val) {
      lismState.push(className)
      if (tokenKey && customVar) {
        addStyle(customVar, getMaybeCssVar(val, tokenKey))
      } else if (setStyles && typeof val === 'string') {
        Object.assign(styles, setStyles(val))
      }
    }
  }

  /**
   * ホバー関連のプロップ (hov) を解析し、ホバークラスまたはスタイルへ振り分ける。
   */
  const setHovProps = (hovVal: any) => {
    if (!hovVal) return
    if (hovVal === '-' || hovVal === true) {
      addUtil('-hov')
    } else if (typeof hovVal === 'string') {
      splitWithComma(hovVal).forEach((v: string) => addUtil(`-hov:${v}`))
    } else if (typeof hovVal === 'object') {
      Object.keys(hovVal).forEach((k) => {
        const v = hovVal[k]
        if (v == null || v === '' || v === false) return
        if (v === '-' || v === true) {
          addUtil(`-hov:${k}`)
        } else if (k === 'class') {
          splitWithComma(v).forEach((c: string) => addUtil(`-hov:${c}`))
        } else if (typeof v === 'string' || typeof v === 'number') {
          const finalV = getMaybeCssVar(v, getTokenKey(k))
          addUtil(`-hov:${k}`)
          addStyle(`--hov-${k}`, finalV)
        }
      })
    }
  }

  // propの解析ループ
  Object.keys(props).forEach((key) => {
    const val = props[key]
    if (val === undefined) return

    if (Object.prototype.hasOwnProperty.call(STATES, key)) {
      const stateConfig = (STATES as Record<string, unknown>)[key]
      if (typeof stateConfig === 'string') {
        if (val) lismState.push(stateConfig)
      } else {
        analyzeState(stateConfig, val)
      }
    } else if (Object.prototype.hasOwnProperty.call(PROPS, key)) {
      const propConfigBase = (PROPS as Record<string, unknown>)[key] || null
      if (propConfigBase !== null && val != null) {
        const config = _propConfig[key]
          ? Object.assign({}, propConfigBase, _propConfig[key])
          : propConfigBase

        const bpData: Record<string, any> = getBpData(val)
        const baseVal = bpData.base
        delete bpData.base

        setAttrs(key, baseVal, config)
        Object.keys(bpData).forEach((bp) => {
          setAttrs(key, bpData[bp], config, bp)
        })
      }
    } else if (key === 'hov') {
      setHovProps(val)
    } else if (key === 'css') {
      if (val) Object.assign(styles, val)
    } else {
      // Lismの対象外の属性(id, data-*, aria-* 等)はそのままattrsへ
      attrs[key] = val
    }
  })

  // 最終的なクラス配列の構築
  // Vueのクラスバインディングを活かし、配列で返す
  const finalClass = [...baseClasses, ...lismState, ...uClasses].filter(Boolean)

  return {
    class: finalClass,
    style: isEmptyObj(styles) ? {} : styles,
    ...attrs,
  }
}
