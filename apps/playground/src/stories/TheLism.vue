<script setup lang="ts">
import { Lism } from '../../../../src/components/Lism'
</script>

<template>
  <div class="p-20">
    <h1 class="text-2xl font-bold mb-10">Lism Component Test</h1>

    <section class="mb-20">
      <h2 class="text-xl font-semibold mb-5">Basic Usage</h2>
      <Lism p="20" bgc="base-2" bd="base" bdrs="2">
        <Lism as="p" fz="xl" fw="bold" mb="10">Lism Component</Lism>
        <Lism as="p">This is a Lism component for Vue.js.</Lism>
      </Lism>
    </section>

    <section class="mb-20">
      <h2 class="text-xl font-semibold mb-5">Responsive Props</h2>
      <Lism :p="['10', '20', '30']" :bgc="['base-2', 'blue:10%', 'green:10%']" bd="base" bdrs="2">
        <Lism as="p" fz="l">Responsive Padding and Background Color</Lism>
        <Lism as="p" :d="{ base: 'none', md: 'block' }">Visible only on md screens and above</Lism>
      </Lism>
    </section>

    <section class="mb-20">
      <h2 class="text-xl font-semibold mb-5">State Props</h2>
      <Lism is-wrapper="l" p="20" bgc="base-2" bd="base" mb="20">
        <Lism as="p">is-wrapper="l" (Center aligned with max-width)</Lism>
      </Lism>
      <Lism pos="relative" p="20" bgc="base-2" bd="base" style="height: 100px">
        <Lism is-layer p="10" bgc="red:10%">is-layer (Overlay)</Lism>
      </Lism>
    </section>

    <section class="mb-20">
      <h2 class="text-xl font-semibold mb-5">Custom Tag (as)</h2>
      <Lism as="section" p="20" bgc="base-1" bd="base">
        <Lism as="h3" fz="xl">Section Heading</Lism>
        <Lism as="ul" p="0" m="0" mt="10" style="list-style: none">
          <Lism as="li" p="10" bd-b="base">Item 1</Lism>
          <Lism as="li" p="10" bd-b="base">Item 2</Lism>
          <Lism as="li" p="10">Item 3</Lism>
        </Lism>
      </Lism>
    </section>
    <section>
      <h2>Tag and exProps</h2>
      <Lism tag="section" p="20" ajax="asdf" bgc="base-2" bd>
        This is a section with <code>tag="section"</code>.
      </Lism>
      <Lism
        as="p"
        m="20"
        p="10"
        bgc="brand"
        c="white"
        :exProps="{ id: 'ex-id', 'data-custom': 'custom-value' }"
      >
        This paragraph has <code>exProps</code> applied (id and data-custom).
      </Lism>
    </section>
    <Lism> aa </Lism>
  </div>
</template>
