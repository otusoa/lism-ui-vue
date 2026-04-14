import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 60000,
    hookTimeout: 60000,
    exclude: [...configDefaults.exclude, '**/dist/**', '**/playground/**', '**/.nuxt/**'],
  },
})
