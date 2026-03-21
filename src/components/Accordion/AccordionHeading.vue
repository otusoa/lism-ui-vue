<template>
  <component
    :is="as"
    :class="['c--accordion_heading']"
    class="set--plain"
    :role="as === 'div' ? 'heading' : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
export interface Props {
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>
