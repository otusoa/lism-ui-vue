<template>
  <Lism max-w="1200px" mx="auto" p="20">
    <div>Nuxt module playground!</div>

    <Lism fx="1" fxd="col-r" fz="5xl">ああ</Lism>
    <LismGrid gar=""> あああ </LismGrid>

    <Lism bd bds="dashed" bdw="4px" bdc="red" p="15" bd-b>bdが効かない</Lism>

    <LismBox p="30" bgc="base-2" bxsh="10" bdrs="10" mb="50">
      <p></p>
    </LismBox>

    <Lism bre fz="5xl">Vitest</Lism>

    <!-- ホバーしたらシャドー -->
    <LismLinkBox href="#" set="transition" bxsh="10" :hov="{ bxsh: '40' }" bd p="20">
      <p>LinkBox</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </LismLinkBox>

    <LismBox set="transition" :hov="{ o: '0.5', c: 'red' }" bgc="base-2" bd p="20" my="20">
      <p>LinkBox</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </LismBox>

    <LismLinkBox my="20" set="transition">
      <LismGroup fz="xl" fw="bold">
        <LismLink class="u--expandedLink" href="#linkbox-demo02"> Heading link text </LismLink>
      </LismGroup>
      <LismText c="text-2" lh="s" my="15">
        Lorem ipsum dolor sit amet. Consectetur adipiscing elit, sed do eiusmod tempor Incididunt
        ut. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut.
      </LismText>
      <LismGroup id="inner-link02" my="10">
        <a href="#inner-link02" class="-hov:o"> Inner Link </a>
      </LismGroup>
    </LismLinkBox>

    <LismStack layout="box" bgc="base-2" g="20" p="30" bdrs="10">
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
    </LismStack>

    <LismContainer bd size="s" is-wrapper="l" p="20">
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

    <LismCenter>
      <LismBox>あああ</LismBox>
    </LismCenter>

    <LismFrame as="figure" ar="16/9" pos="relative">
      <img src="https://cdn.lism-css.com/img/a-1.jpg" alt="" width="960" height="640" />
      <LismLayer p="20" d="f" ai="c" jc="c">
        <Lism fz="2xl" fw="bold">BACKDROP BLUR</Lism>
      </LismLayer>
    </LismFrame>

    <LismFlow flow="10px">
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
    </LismFlow>

    <LismFluidCols auto-fill cols="240px" g="20" my="50">
      <LismBox p="30" bgc="base-2" bd>Card 1</LismBox>
      <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
      <LismBox p="30" bgc="base-2" bd>Card 3</LismBox>
    </LismFluidCols>

    <LismTileGrid cols="3" rows="3" g="5" min-h="50svh" my="50">
      <LismBox p="20" bgc="base-2"> item1 </LismBox>
      <LismBox p="20" bgc="base-2"> item2 </LismBox>
      <LismBox p="20" bgc="base-2"> item3 </LismBox>
      <LismBox p="20" bgc="base-2"> item4 </LismBox>
      <LismBox p="20" bgc="base-2" gc="span 2"> item5 </LismBox>
      <LismCenter gc="3" gr="1 / -1" p="20" bgc="blue"> item6 </LismCenter>
    </LismTileGrid>

    <LismTileGrid :cols="['2', '3']" rows="4" min-h="50svh" gaf="row dense" my="50">
      <LismBox :gc="['1 / -1', 'span 2']" :gr="['span 2', '1 / -1']" p="20" bgc="base-2">
        A
      </LismBox>
      <LismBox p="20" bgc="green:20%"> B </LismBox>
      <LismBox p="20" bgc="blue:20%"> C </LismBox>
      <LismBox p="20" bgc="red:20%"> D </LismBox>
      <LismBox p="20" bgc="purple:20%"> E </LismBox>
    </LismTileGrid>

    <LismColumns :cols="[1, 2, 3]" g="20" my="50">
      <LismBox bgc="base-2" p="20"> Box1 </LismBox>
      <LismBox bgc="base-2" p="20"> Box2 </LismBox>
      <LismBox bgc="base-2" p="20"> Box3 </LismBox>
      <LismBox bgc="base-2" p="20"> Box4 </LismBox>
      <LismBox bgc="base-2" p="20"> Box5 </LismBox>
      <LismBox bgc="base-2" p="20"> Box6 </LismBox>
    </LismColumns>

    <LismSwitchCols break-size="">
      <LismBox m p="30" bgc="base-2" bd>Card 1</LismBox>
      <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
      <LismBox p="30" bgc="base-2" bd>Card 3</LismBox>
    </LismSwitchCols>

    <pre><code>{{ useTest().message }}</code></pre>

    <!-- <LismFlow setGutter py="20" w="100%" h="20em" className="is--vertical@sm set--bp">
      <p></p>
    </LismFlow> -->

    <Lism :hov="{ bxsh: '10' }" p="20" bgc="base-2" bdrs="10"> ホバー</Lism>

    <LismFrame as="figure" ar="2/1" pos="rel">
      <LismMedia
        src="https://cdn.lism-css.com/img/a-1.jpg"
        width="960"
        height="640"
        style="filter: contrast(1.1) saturate(0.2)"
        alt="Dummy Image"
      />
      <Lism as="figcaption" pos="abs" z="1" b="0" p="5" w="100%" c="white" ta="center" lts="l">
        Lorem ipsum text.
      </Lism>
    </LismFrame>

    <LismText as="p" fw="bold">あああ</LismText>

    <LismUiDummy as="ol" length="xl" />

    <LismBox p="30" bgc="base-2" bdrs="10" mt="50">
      <LismHeading lv="1">Heading 1</LismHeading>
      <LismHeading lv="2">Heading 2</LismHeading>
      <LismHeading lv="3">Heading 3</LismHeading>

      <LismText>This is a LismText component (p tag).</LismText>
      <LismText>
        This is <LismInline bd-b bdc="red">LismInline (span)</LismInline> inside a Text.
      </LismText>

      <LismGroup mt="20" p="20" bd bds="dashed">
        <LismText>Inside a LismGroup (div).</LismText>
        <LismLink href="https://lism-css.com">This is a LismLink (a tag)</LismLink>
      </LismGroup>

      <LismList mt="20" g="10">
        <LismListItem>List Item 1</LismListItem>
        <LismListItem>List Item 2</LismListItem>
        <LismListItem>List Item 3</LismListItem>
      </LismList>

      <LismList as="dl" mt="20" g="10">
        <LismListItem as="dt">Ordered Item 1</LismListItem>
        <LismListItem as="dd">Ordered Item 2</LismListItem>
      </LismList>
    </LismBox>

    <LismBox p="30" my="50" pos="relative">
      <LismText>
        Lorem ipsum dolor sit amet. Consectetur adipiscing elit, sed do eiusmod tempor Incididunt
        ut. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut.
      </LismText>
      <LismDecorator size="1.25em" pos="absolute" t="0" l="0" bd-x-s bd-y-s bdc="current" />
      <LismDecorator size="1.25em" pos="absolute" r="0" b="0" bd-x-e bd-y-e bdc="current" />
    </LismBox>
  </Lism>
</template>

<script setup lang="ts">
import { useTest } from 'lism-ui-vue/composables'
</script>
