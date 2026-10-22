import { expectTypeOf } from 'vitest'
import type LismDecorator from './LismDecorator.vue'

type DecoratorPublicProps = InstanceType<typeof LismDecorator>['$props']
type DecoratorCss = NonNullable<DecoratorPublicProps['css']>

// vue-tscで、コンポーネントの公開props型を検証する。
expectTypeOf<{ color: string; opacity: number; '--custom': string }>().toExtend<DecoratorCss>()

// @ts-expect-error cssはオブジェクト専用とし、CSS宣言の文字列は受け付けない。
const invalidCss: DecoratorCss = 'color: red'
void invalidCss
