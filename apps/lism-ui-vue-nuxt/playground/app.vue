<template>
  <Lism max-w="1000px" mx="auto">
    <div>Nuxt module playground!</div>

    <Lism fx="1" fxd="col-r" fz="5xl">ああ</Lism>
    <Lism pl="80" ac="end"> あああ </Lism>

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
  </Lism>
</template>

<script setup lang="ts"></script>
