<template>
  <div>
    <LismBox id="test-box" p="20" bgc="base-2" bd>Box Content</LismBox>
    <LismFlex id="test-flex" g="10" ai="c">
      <LismBox>Item 1</LismBox>
      <LismBox>Item 2</LismBox>
    </LismFlex>
    <LismStack id="test-stack" g="20">
      <LismBox>Item A</LismBox>
      <LismBox>Item B</LismBox>
    </LismStack>
    <LismGrid id="test-grid" gtc="2" g="15">
      <LismBox>Grid 1</LismBox>
      <LismBox>Grid 2</LismBox>
    </LismGrid>
    <LismContainer id="test-container" size="m">Container Content</LismContainer>
    <LismCluster id="test-cluster" g="5">
      <LismBox>Tag 1</LismBox>
      <LismBox>Tag 2</LismBox>
    </LismCluster>
    <LismFrame id="test-frame" ar="16/9">
      <img src="https://example.com/test.jpg" alt="" />
    </LismFrame>
    <LismSideMain id="test-sidemain" side-w="200px" main-w="400px" g="20">
      <Lism is-side>Side</Lism>
      <Lism>Main</Lism>
    </LismSideMain>
    <LismLayer id="test-layer" blur="5px" bgc="rgba(0,0,0,0.5)">
      Layer Content
    </LismLayer>
  </div>
</template>
