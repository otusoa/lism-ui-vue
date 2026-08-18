import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    index: './src/components/index.ts',
    composables: './src/composables/index.ts',
  },
  format: 'esm',
  platform: 'neutral',
  outDir: 'dist',
  fixedExtension: false,
  hash: false,
  dts: {
    tsconfig: './tsconfig.app.json',
    vue: true,
  },
  deps: {
    neverBundle: ['vue', /^lism-css(?:\/|$)/],
  },
  css: {
    minify: true,
  },
  plugins: [vue()],
  outputOptions: {
    entryFileNames: '[name].js',
    chunkFileNames: 'lism-ui-vue.js',
    assetFileNames: 'lism-ui-vue.[ext]',
  },
  copy: [
    {
      from: 'src/components/**/*.{vue,ts,mts}',
      to: 'dist/runtime',
      flatten: false,
    },
    {
      from: 'src/core/**/*.{ts,mts}',
      to: 'dist/runtime',
      flatten: false,
    },
    {
      from: 'src/composables/**/*.{ts,mts}',
      to: 'dist/runtime',
      flatten: false,
    },
  ],
})
