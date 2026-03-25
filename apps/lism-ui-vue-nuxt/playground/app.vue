<template>
  <Lism max-w="1000px" mx="auto">
    <div>Nuxt module playground!</div>

    <Lism fx="1" fxd="col-r" fz="5xl">ああ</Lism>
    <LismGrid gar=""> あああ </LismGrid>

    <Lism bd bds="dashed" bdw="4px" bdc="red" p="15" bd-b>bdが効かない</Lism>

    <LismBox p="30" bgc="base-2" bxsh="10" bdrs="10" mb="50">
      <p></p>
    </LismBox>

    <Lism bd p="30" bgc="base-2" bxsh="10" bdrs="10" mb="50">
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

    <LismSideMain side-w="200px" main-w="" g="20">
      <Lism is-side p="20" bgc="base-2">Sidebar</Lism>
      <Lism p="20" bd>Main content</Lism>
    </LismSideMain>

    <LismFrame as="figure" ar="16/9" pos="rel">
      <img src="https://cdn.lism-css.com/img/a-1.jpg" alt="" width="960" height="640" />
      <LismLayer blur="10px" bgc="rgb(255 255 255 / 20%)" p="20" d="f" ai="c" jc="c">
        <Lism fz="2xl" fw="bold">BACKDROP BLUR</Lism>
      </LismLayer>
    </LismFrame>
  </Lism>
</template>

<script setup lang="ts"></script>
