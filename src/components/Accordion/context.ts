import type { InjectionKey, Ref } from 'vue'

export const accordionItemIdKey = Symbol('accordion-item-id') as InjectionKey<Ref<string>>

export interface AccordionRootContext {
  allowMultiple: Ref<boolean>
  isItemOpen: (id: string) => boolean
  toggleItem: (id: string) => void
  openItem: (id: string) => void
  closeItem: (id: string) => void
}

export const accordionRootContextKey = Symbol(
  'accordion-root-context',
) as InjectionKey<AccordionRootContext>
