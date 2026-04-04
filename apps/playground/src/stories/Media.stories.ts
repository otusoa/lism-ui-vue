import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismMedia } from '@/components'

const meta: Meta<typeof LismMedia> = {
  title: 'Components/Media',
  component: LismMedia,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismMedia>

export const Image: Story = {
  args: {
    src: 'https://cdn.lism-css.com/img/a-1.jpg',
    alt: 'Sample Image',
    width: '400',
    height: '300',
    bdrs: '2',
  },
}

export const Video: Story = {
  args: {
    as: 'video',
    src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    controls: true,
    width: '480',
  },
}

export const Iframe: Story = {
  args: {
    as: 'iframe',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.76493611525867!3d35.68123618019432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277a4484dca25932!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1655822345678!5m2!1sja!2sjp',
    width: '100%',
    height: '400',
    style: 'border:0',
  },
}
