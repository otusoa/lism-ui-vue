<template>
  <Lism max-w="1200px" mx="auto" p="20">
    <div>Nuxt module playground!</div>

    <Lism fx="1" fxd="col-r" fz="5xl">ああ</Lism>
    <LismGrid gar=""> あああ </LismGrid>

    <Lism bd bds="dashed" bdw="4px" bdc="red" p="15" bd-b>bdが効かない</Lism>

    <LismBox p="30" bgc="base-2" bxsh="10" bdrs="10" mb="50">
      <p></p>
    </LismBox>

    <Lism fz="5xl">Vitest</Lism>

    <!-- ホバーしたらシャドー -->
    <Lism setTransition bxsh="10" :hov="{ bxsh: '40' }" bd p="30" bgc="base-2" bdrs="10" mb="50">
      <p>aaa</p>
    </Lism>

    <LismStack layout="box" bgc="base-2" g="20" p="30" bdrs="10">
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
    </LismStack>

    <LismContainer bd is-wrapper="s" p="20">
      <LismBox :p="[10, 30]">このBOXは、paddingが切り替わります。</LismBox>
    </LismContainer>
    <LismFlex g="10">
      <LismBox bgc="base-2">aaa</LismBox>
      <LismBox bgc="base-2">aaa</LismBox>
      <LismBox bgc="base-2">aaa</LismBox>
    </LismFlex>

    <LismSideMain sideW="12rem" mainW="20rem" g="20">
      <LismBox layout="box" p="15" bd bdc="blue">
        <p>Main Content</p>
      </LismBox>
      <LismBox isSide p="15" bd bdc="red">
        <p>Side Content</p>
      </LismBox>
    </LismSideMain>

    <LismFrame as="figure" ar="16/9" pos="rel">
      <img src="https://cdn.lism-css.com/img/a-1.jpg" alt="" width="960" height="640" />
      <LismLayer contrast="1.1" sepia="0.4" grayscale="0.4" p="20" d="f" ai="c" jc="c">
        <Lism fz="2xl" fw="bold">BACKDROP BLUR</Lism>
      </LismLayer>
    </LismFrame>

    <LismFlow flow="10px">
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
    </LismFlow>
  </Lism>
  <pre><code>{{ useTest().message }}</code></pre>
</template>

<script setup lang="ts">
import { useTest } from 'lism-ui-vue/composables'
</script>
