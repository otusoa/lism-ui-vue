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
      dirs: ['src/composables'],
      dts: 'dist/auto-imports.d.ts',
    }),
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
      entryRoot: 'src',
      outDir: 'dist',
      insertTypesEntry: true,
      copyDtsFiles: false,
    }),
    // ビルド完了後に .vue ファイルを dist/runtime/components/ にコピーする
    // nuxt.ts の addComponentsDir がこのパスを参照する
    {
      name: 'copy-vue-to-runtime',
      writeBundle() {
        const copyDir = (srcPath: string, destPath: string) => {
          cpSync(
            fileURLToPath(new URL(srcPath, import.meta.url)),
            fileURLToPath(new URL(destPath, import.meta.url)),
            {
              recursive: true,
              filter: (src) => {
                try {
                  if (statSync(src).isDirectory()) return true
                } catch {
                  return false
                }
                return /\.(vue|ts|mts)$/.test(src)
              },
            },
          )
        }
        copyDir('./src/components', './dist/runtime/components')
        copyDir('./src/core', './dist/runtime/core')
        copyDir('./src/composables', './dist/runtime/composables')
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
        composables: fileURLToPath(new URL('./src/composables/index.ts', import.meta.url)),
      },
      name: 'LismUIVue',
      fileName: (entryName: string) => `${entryName}.js`,
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
