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
    <Lism util="-cbox" keycolor="blue" p="20">
      <p>Lorem ipsum dolor <i>sit amet</i>. consectetur <a href="###">adipisicing elit</a>, sed do eiusmod tempor. Non
        facere <code>Laudantium</code> ex eos <b>doloribus aut dolore</b> nisi provident.</p>
    </Lism>
    <Lism atomic="divider"></Lism>

    <!-- ホバーでシャドウが変化するボックスの実装例 -->
    <LismBox bgc="base" p="30" bdrs="20" bd bxsh="10" has-transition :hov="{ bxsh: '40' }" my="40">
      <LismHeading lv="3" mb="15">Hover Shadow Box</LismHeading>
      <LismText c="text-2">
        マウスをホバーすると <code>bxsh</code>（box-shadow）トークンが切り替わります。
        <code>has-transition</code> を指定することで、影の変化が滑らかになります。
      </LismText>
    </LismBox>

    <LismStack layout="box" bgc="base-2" g="20" p="30" bdrs="10">
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
      <LismBox>aaa</LismBox>
    </LismStack>

    <LismContainer bd is-wrapper="l" p="20">
      <LismBox :p="[10, 30]">このBOXは、paddingが切り替わります。</LismBox>
    </LismContainer>

    <!-- LismIcon の使用例 -->
    <Lism p="40" my="40" bd>
      <LismHeading lv="2" mb="30">LismIcon Samples</LismHeading>
      
      <LismCluster g="30">
        <!-- プリセットアイコン -->
        <LismBox>
          <LismText fz="xs" c="text-2" mb="5">Preset icons</LismText>
          <LismCluster g="15" fz="3xl">
            <LismIcon icon="menu" />
            <LismIcon icon="home" c="blue" />
            <LismIcon icon="warning" c="red" />
            <LismIcon icon="check-circle" c="green" />
            <LismIcon icon="gear" hov="zoom" />
          </LismCluster>
        </LismBox>

        <!-- サイズとカラー -->
        <LismBox>
          <LismText fz="xs" c="text-2" mb="5">Sizes & Colors</LismText>
          <LismCluster g="20" ai="center">
            <LismIcon icon="heart" size="1em" c="red-3" />
            <LismIcon icon="heart" size="1.5em" c="red-5" />
            <LismIcon icon="heart" size="2em" c="red-7" />
            <LismIcon icon="heart" size="3em" c="red" />
          </LismCluster>
        </LismBox>

        <!-- ラベル付き（アクセシブル） -->
        <LismBox>
          <LismText fz="xs" c="text-2" mb="5">With Label (aria-label)</LismText>
          <LismIcon icon="chat" label="チャットを開く" fz="3xl" hov="o" cursor="pointer" />
        </LismBox>

        <!-- スロットによるSVG直接記述 -->
        <LismBox>
          <LismText fz="xs" c="text-2" mb="5">Custom SVG (Slot)</LismText>
          <LismIcon viewBox="0 0 256 256" fz="4xl" c="orange">
            <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-width="16" />
            <circle cx="92" cy="108" r="12" />
            <circle cx="164" cy="108" r="12" />
            <path d="M169.6,176a48,48,0,0,1-83.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
          </LismIcon>
        </LismBox>

        <!-- 画像をアイコンとして使用 -->
        <LismBox>
          <LismText fz="xs" c="text-2" mb="5">Image as Icon</LismText>
          <LismIcon src="https://picsum.photos/id/64/100/100" fz="4xl" bdrs="full" />
        </LismBox>
      </LismCluster>
    </Lism>
    <LismFlex g="10">
      <LismBox bgc="base-2">aaa</LismBox>
      <LismBox bgc="base-2">aaa</LismBox>
      <LismBox bgc="base-2">aaa</LismBox>
    </LismFlex>

    <LismWithSide side-w="12rem" main-w="20rem" g="20">
      <LismBox layout="box" p="15" bd bdc="blue">
        <p>Main Content</p>
      </LismBox>
      <LismBox is-side p="15" bd bdc="red">
        <p>Side Content</p>
      </LismBox>
    </LismWithSide>

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

    <LismAutoColumns cols="240px" g="20" my="50">
      <LismBox p="30" bgc="base-2" bd>Card 1</LismBox>
      <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
      <LismBox p="30" bgc="base-2" bd>Card 3</LismBox>
    </LismAutoColumns>

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

    <LismSwitchColumns break-size="">
      <LismBox m p="30" bgc="base-2" bd>Card 1</LismBox>
      <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
      <LismBox p="30" bgc="base-2" bd>Card 3</LismBox>
    </LismSwitchColumns>

    <pre><code>{{ useTest().message }}</code></pre>

    <!-- <LismFlow setGutter py="20" w="100%" h="20em" className="is--vertical@sm set--bp">
      <p></p>
    </LismFlow> -->

    <Lism :hov="{ bxsh: '10' }" p="20" bgc="base-2" bdrs="10"> ホバー</Lism>

    <LismFrame as="figure" ar="2/1" pos="rel">
      <LismMedia
src="https://cdn.lism-css.com/img/a-1.jpg" width="960" height="640"
        style="filter: contrast(1.1) saturate(0.2)" alt="Dummy Image" />
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

    <LismStack g="20">
      <LismBox
p="30" bgc="base-2"
        :hov="{ bgc: 'accent', c: 'white', duration: '1s', easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' }"
        set-transition>
        Slow & Bouncy (1s duration)
      </LismBox>
    </LismStack>
  </Lism>
</template>

<script setup lang="ts">
import { useTest } from 'lism-ui-vue/composables'
</script>
