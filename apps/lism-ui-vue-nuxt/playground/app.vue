<template>
  <div>Nuxt module playground!</div>
  <Lism tag="">
    あああ
  </Lism>
  <AccordionRoot>
    <AccordionItem>
      <AccordionHeading>
        <AccordionButton p="20">
          <span>テスト日本語ジャパン</span>
        </AccordionButton>
      </AccordionHeading>
      <AccordionPanel p="20" lism-class="b-y-style-groove">
        <AccordionContent> テスト日本語ジャパンコンテンツ </AccordionContent>
      </AccordionPanel>
    </AccordionItem>
  </AccordionRoot>
</template>

<script setup lang="ts">
import 'lism-css/main.css'
import 'lism-ui-vue/style'
</script>
