// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { LismIcon } from './index'

describe('LismIcon without a browser DOM', () => {
  it('sanitizes root attributes and nested SVG content during SSR', async () => {
    expect(typeof window).toBe('undefined')
    const html = await renderToString(
      createSSRApp({
        render: () =>
          h(LismIcon, {
            icon: `<svg viewBox="0 0 24 24" onload="alert(1)">
          <script>alert(1)</script>
          <image href="missing.png" onerror="alert(1)" />
          <a href="javascript:alert(1)"><path d="M4 12h16" /></a>
          <foreignObject><div>unsafe</div></foreignObject>
        </svg>`,
            label: 'Arrow',
          }),
      }),
    )
    expect(html).not.toMatch(/onload|onerror|javascript:|<script|foreignObject|unsafe/)
    expect(html).toContain('viewBox="0 0 24 24"')
    expect(html).toContain('<path d="M4 12h16"></path>')
    expect(html).toContain('aria-label="Arrow"')
  })
})
