import type { Preview } from '@storybook/vue3-vite'
import 'lism-css/main.css'
// まだDistにstyle.cssがないのでコメントアウト
// import 'root/dist/style.css'

// Add library's own CSS if it exists, or source it carefully.
// Note: Since we are in development, maybe importing the source styles or ensuring the library is built is needed.
// For now, let's start with lism-css.

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
