<script setup lang="ts">
import { computed, provide, ref, toRef } from 'vue'
import { accordionRootContextKey } from './context'

interface Props {
  allowMultiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  allowMultiple: false,
})

const allowMultiple = toRef(props, 'allowMultiple')
const openedItemIds = ref<Set<string>>(new Set())

const isItemOpen = (id: string) => openedItemIds.value.has(id)

const openItem = (id: string) => {
  const next = new Set(openedItemIds.value)
  if (!allowMultiple.value) {
    next.clear()
  }
  next.add(id)
  openedItemIds.value = next
}

const closeItem = (id: string) => {
  const next = new Set(openedItemIds.value)
  next.delete(id)
  openedItemIds.value = next
}

const toggleItem = (id: string) => {
  if (isItemOpen(id)) {
    closeItem(id)
    return
  }
  openItem(id)
}

provide(accordionRootContextKey, {
  allowMultiple,
  isItemOpen,
  toggleItem,
  openItem,
  closeItem,
})

const classNames = computed(() => ['l--stack', 'c--accordion'].join(' '))
</script>

<template>
  <div :class="[classNames]" class="-bd" :data-allow-multiple="props.allowMultiple ? '' : undefined">
    <slot />
  </div>
</template>

<style>
@layer lism.modules {
  .c--accordion {
    --duration: var(--acc-duration, 0.25s);
  }

  .c--accordion_item {
    --_panel-h: 0px;
    --_icon-transform: rotate(0deg);
    overflow: hidden;
  }

  .c--accordion_heading {
    margin: 0;
  }

  .c--accordion_button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 0.75em;
    box-sizing: border-box;
    margin: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
  }

  /* 開いている時 */
  .c--accordion_item[data-opened] {
    --_icon-transform: rotate(90deg);
    --_panel-h: auto;
    /* Note: アニメーション時、jsでセットされる */
  }

  /* .c--accordion_button {} */
  .c--accordion_panel {
    overflow: hidden;
    height: var(--_panel-h);
    transition: height var(--duration);
  }

  /* コンテンツの paddingは __panel ではなくこっちにつける */
  /* .c--accordion_content {} */

  /* パネルが完全に閉じている時にabsoluteで飛ばしておくと、Chromeでも検索時に正常にハイライトされるようになる（なぜかは不明） */
  [hidden]>.c--accordion_content {
    position: absolute;
  }

  /* アイコンの描画 */
  .c--accordion_icon {
    display: grid;
    width: 1em;
    height: 1em;

    &::before,
    &::after {
      content: '';
      display: block;
      grid-area: 1 / 1;
      background-color: currentColor;
    }

    &::before {
      width: 0.1em;
      height: 100%;
      transition: transform var(--duration);
      transform: var(--_icon-transform);
    }

    &::after {
      height: 0.1em;
      width: 100%;
    }
  }

  /* フォーカス時のアウトラインを少し内側に寄せる( overflow:hidden によって途切れてしまうので)  */
  .c--accordion_button:focus-visible {
    outline: solid 2px currentColor;
    outline-color: revert;
    outline-offset: -3px;
    /* offset 調整だけだとブラウザ間の差が大きい */
  }

  /* --- 「視差効果を減らす」設定を考慮 --- */
  @media (prefers-reduced-motion: reduce) {
    .c--accordion_item {
      --duration: 0s;
    }
  }

  /* --- JSオフ環境の考慮 --- */
  @media (scripting: none) {
    .c--accordion_panel {
      height: auto !important;
      content-visibility: visible !important;
    }

    .c--accordion_content {
      position: static !important;
    }
  }
}
</style>
