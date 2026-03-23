<template>
  <div>Nuxt module playground!</div>

  <Lism fx="1" fxd="col-r" fz="5xl">ああ</Lism>
  <Lism bd bds="dashed" bdw="4px" bdc="red" p="15" bd-b> あああ </Lism>
  <AccordionRoot>
    <AccordionItem>
      <AccordionHeading>
        <AccordionButton p="15">
          <span>テスト日本語ジャパン</span>
        </AccordionButton>
      </AccordionHeading>
      <AccordionPanel p="20" lism-class="b-y-style-groove">
        <AccordionContent> テスト日本語ジャパンコンテンツ </AccordionContent>
      </AccordionPanel>
    </AccordionItem>
  </AccordionRoot>
</template>

<script setup lang="ts"></script>
