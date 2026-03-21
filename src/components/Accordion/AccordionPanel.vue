<script setup lang="ts">
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useAttrs,
  watch,
  type ComputedRef,
} from 'vue'
import { accordionItemIdKey, accordionRootContextKey } from './context'

defineOptions({
  inheritAttrs: false,
})

export interface Props {
  id?: string
  isOpen?: boolean
  flow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  flow: true,
})

const attrs = useAttrs()
const itemId = inject<ComputedRef<string> | undefined>(accordionItemIdKey, undefined)
const rootContext = inject(accordionRootContextKey, null)
const panelRef = ref<HTMLElement | null>(null)
const isHidden = ref(true)

const panelId = computed(() => props.id || itemId?.value || '__LISM_ACC_ID__')
const isOpened = computed(() => {
  if (typeof props.isOpen === 'boolean') {
    return props.isOpen
  }
  if (!itemId?.value || !rootContext) {
    return false
  }
  return rootContext.isItemOpen(itemId.value)
})

const contentClassNames = computed(() => [
  'c--accordion_content',
  props.flow ? 'l--flow' : undefined,
])

const getItemEl = () => panelRef.value?.closest('.c--accordion_item') as HTMLElement | null
const getPanelHeight = () => panelRef.value?.scrollHeight ?? 0
const setPanelHeight = (height: string) => {
  const itemEl = getItemEl()
  if (!itemEl) {
    return
  }
  itemEl.style.setProperty('--_panel-h', height)
}

const hasTransition = () => {
  if (!panelRef.value) {
    return false
  }
  const durations = getComputedStyle(panelRef.value).transitionDuration.split(',')
  return durations.some((duration) => parseFloat(duration) > 0)
}

const onTransitionEnd = () => {
  if (isOpened.value) {
    setPanelHeight('auto')
    return
  }
  isHidden.value = true
}

const syncOpenedState = async (opened: boolean) => {
  if (opened) {
    isHidden.value = false
    setPanelHeight('0px')
    await nextTick()
    requestAnimationFrame(() => {
      setPanelHeight(`${getPanelHeight()}px`)
      if (!hasTransition()) {
        onTransitionEnd()
      }
    })
    return
  }

  isHidden.value = false
  setPanelHeight(`${getPanelHeight()}px`)
  requestAnimationFrame(() => {
    setPanelHeight('0px')
    if (!hasTransition()) {
      onTransitionEnd()
    }
  })
}

onMounted(async () => {
  if (isOpened.value) {
    isHidden.value = false
    setPanelHeight('auto')
    return
  }
  await nextTick()
  setPanelHeight('0px')
  isHidden.value = true
})

watch(isOpened, (opened) => {
  void syncOpenedState(opened)
})

onBeforeUnmount(() => {
  const itemEl = getItemEl()
  if (itemEl) {
    itemEl.style.removeProperty('--_panel-h')
  }
})
</script>

<template>
  <div
    ref="panelRef"
    class="c--accordion_panel -pos:rel -ov:hidden"
    :id="panelId"
    :hidden="isHidden ? 'until-found' : undefined"
    @transitionend="onTransitionEnd"
  >
    <div :class="contentClassNames" v-bind="attrs">
      <slot />
    </div>
  </div>
</template>
