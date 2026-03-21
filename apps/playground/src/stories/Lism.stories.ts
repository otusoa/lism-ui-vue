import 'lism-css/main.css'
import TheLism from './TheLism.vue'

const meta = {
  title: 'Components/Lism',
  component: TheLism,
  tags: ['autodocs'],
}

export default meta

export const Default = {
  render: () => ({
    components: { TheLism },
    template: '<TheLism />',
  }),
}
