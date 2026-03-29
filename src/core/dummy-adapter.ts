import DUMMY_TEXTS from 'lism-css/react/Dummy/texts'

const splitText = (text: string) =>
  text
    .split(/([,.、。])/)
    .filter((s) => s !== '')
    .reduce((acc: string[], cur, idx, arr) => {
      if (idx % 2 === 0) {
        acc.push(cur + (arr[idx + 1] || ''))
      }
      return acc
    }, [])
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export interface GetContentOptions {
  tag?: string
  pre?: string
  length?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'codes' | (string & {})
  lang?: 'ja' | 'en' | 'ar'
  offset?: number
}

/**
 * ダミーテキストを生成するロジック（LismCSSの本家ロジックをVue/TS向けに移植）
 */
export function getContent({
  tag = 'p',
  pre = '',
  length = 'm',
  lang = 'en',
  offset = 0,
}: GetContentOptions): string {
  const texts = DUMMY_TEXTS[lang] as Record<string, string>
  let text = texts?.[length] || texts?.['s'] || ''

  const normalizedTag = tag?.toString().toLowerCase();
  const isList = normalizedTag === 'ul' || normalizedTag === 'ol';

  const safePre = pre ? escapeHtml(pre) : '';

  if (isList) {
    const listItems = splitText(text).map((s) => s.trim()).filter(Boolean);
    text = listItems.map((s) => `<li>${s}</li>`).join('');
    if (safePre) {
      text = `<li>${safePre}</li>` + text;
    }
  } else {
    const normalizedOffset = Math.max(0, Math.trunc(offset));
    if (normalizedOffset > 0) {
      const parts = splitText(text);
      text = parts.slice(normalizedOffset).join('').trim();
      text = text.charAt(0).toUpperCase() + text.slice(1);
    }

    if (safePre) {
      text = safePre + text;
    }
  }

  return text
}
