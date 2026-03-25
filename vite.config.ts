import { fileURLToPath, URL } from 'node:url'
import { cpSync, statSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dirs: ['src/runtime/composables'],
      dts: 'dist/auto-imports.d.ts',
    }),
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
      entryRoot: 'src/components',
      outDir: 'dist',
      insertTypesEntry: true,
      copyDtsFiles: false,
    }),
    // ビルド完了後に .vue ファイルを dist/runtime/components/ にコピーする
    // nuxt.ts の addComponentsDir がこのパスを参照する
    {
      name: 'copy-vue-to-runtime',
      writeBundle() {
        cpSync(
          fileURLToPath(new URL('./src/components', import.meta.url)),
          fileURLToPath(new URL('./dist/runtime/components', import.meta.url)),
          {
            recursive: true,
            filter: (src) => {
              // ディレクトリはそのまま通す
              try {
                if (statSync(src).isDirectory()) return true
              } catch {
                return false
              }
              // .vue, .ts, .mts ファイルをコピー（コンポーネントが依存するファイル用）
              return /\.(vue|ts|mts)$/.test(src)
            },
          },
        )
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/components/index.ts', import.meta.url)),
      },
      name: 'LismUIVue',
      fileName: (entryName) => `${entryName}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        entryFileNames: '[name].js',
        chunkFileNames: 'lism-ui-vue.js',
        assetFileNames: 'lism-ui-vue.[ext]',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
