const LOREM_IPSUM_JA = [
  `ロレム・イプサムの座り雨。`,
  `目まぐるしい文章の流れの中で、それは静かに歩く仮の言葉です。`,
  `Elitも穏やかに続いていきますが、積み重ねられてきた「LiberroyとFoogの取り組み」は、余白のようなものです。`,
  `作業が進むにつれて、工夫や考えとともに関心が折り重なりながらも、必要以上に主張せず彼らの作品は私たちに一定の示唆を与えてくれます。`,
  `内容の違いを比べるためのドラーとして、静かにそこにあります。選ばれた事実や、意味を限定しない言葉の並びは、全体の雰囲気を整える役割を果たします。時間の流れの中で、そうした文章は自然に形を変え、使う人の意図に委ねられていきます。`,
]

const LOREM_IPSUM_EN = [
  'Lorem ipsum dolor sit amet.',
  'Consectetur adipiscing elit, sed do eiusmod tempor Incididunt ut.',
  'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
  'Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.',
  'Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
]

const TEXTS = {
  ja: {
    xs: LOREM_IPSUM_JA[0],
    s: LOREM_IPSUM_JA[0]! + LOREM_IPSUM_JA[1],
    m: LOREM_IPSUM_JA[0]! + LOREM_IPSUM_JA[1]! + LOREM_IPSUM_JA[2],
    l: LOREM_IPSUM_JA[0]! + LOREM_IPSUM_JA[1]! + LOREM_IPSUM_JA[2]! + LOREM_IPSUM_JA[3],
    xl:
      LOREM_IPSUM_JA[0]! +
      LOREM_IPSUM_JA[1]! +
      LOREM_IPSUM_JA[2]! +
      LOREM_IPSUM_JA[3]! +
      LOREM_IPSUM_JA[4],
    codes: `ロレム・イプサムの<i>座り雨</i>、それは<a href='###'>静かに歩く仮の言葉</a>です。長いあいだ積み重ねられてきた<code>Liberroy</code>と<code>Foog</code>の取り組み」は、私たちに<b>一定の示唆</b>を与えてくれます。`,
  },
  en: {
    xs: LOREM_IPSUM_EN[0],
    s: LOREM_IPSUM_EN[0] + ' ' + LOREM_IPSUM_EN[1],
    m: LOREM_IPSUM_EN[0] + ' ' + LOREM_IPSUM_EN[1] + ' ' + LOREM_IPSUM_EN[2],
    l:
      LOREM_IPSUM_EN[0] +
      ' ' +
      LOREM_IPSUM_EN[1] +
      ' ' +
      LOREM_IPSUM_EN[2] +
      ' ' +
      LOREM_IPSUM_EN[3],
    xl:
      LOREM_IPSUM_EN[0] +
      ' ' +
      LOREM_IPSUM_EN[1] +
      ' ' +
      LOREM_IPSUM_EN[2] +
      ' ' +
      LOREM_IPSUM_EN[3] +
      ' ' +
      LOREM_IPSUM_EN[4],
    codes: `Lorem ipsum dolor <i>sit amet</i>. consectetur <a href='###'>adipisicing elit</a>, sed do eiusmod tempor. Non facere <code>Laudantium</code> ex eos <b>doloribus aut dolore</b> nisi provident.`,
  },
  ar: {
    s: 'هذا نص وهمي أنا أكتب جمل ليس لها معنى معين.هذا نص وهمي أنا أكتب جمل ليس لها معنى معين.هذا نص وهمي أنا أكتب جمل ليس لها معنى معين.',
  },
}

type Lang = keyof typeof TEXTS

// 句読点で split し、各文の末尾に句読点を残す
const splitByPunctuation = (content: string): string[] => {
  return content
    .split(/([,.、。])/)
    .filter((item) => item !== '')
    .reduce<string[]>((acc, curr, i, arr) => {
      if (i % 2 === 0) {
        acc.push(curr + (arr[i + 1] || ''))
      }
      return acc
    }, [])
}

const escapeHtml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export interface GetContentOptions {
  tag?: string
  pre?: string
  length?: string
  lang?: Lang
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
  const langTexts = TEXTS[lang] as Record<string, string> | undefined
  let content = langTexts?.[length] || langTexts?.['s'] || ''
  const safePre = escapeHtml(pre)

  const normalizedTag = tag?.toString().toLowerCase()
  const isList = normalizedTag === 'ul' || normalizedTag === 'ol'

  if (isList) {
    // リスト形式の場合は全テキストを分割して <li> に変換
    const items = splitByPunctuation(content)
      .map((s) => s.trim())
      .filter(Boolean)
    content = items.map((s) => `<li>${s}</li>`).join('')
    if (safePre) {
      content = `<li>${safePre}</li>` + content
    }
  } else {
    if (offset) {
      content = splitByPunctuation(content).slice(offset).join('').trim()
      content = content.charAt(0).toUpperCase() + content.slice(1)
    }
    if (safePre) {
      content = safePre + content
    }
  }

  return content
}
