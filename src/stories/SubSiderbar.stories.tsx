import type { Meta, StoryObj } from '@storybook/react'
import SubSiderbar from '@src/stories/SubSiderbar'
import { withRouter } from 'storybook-addon-react-router-v6'
import cicd from './assets/cicd.svg'
import venus from './assets/venus.svg'
import setting from './assets/setting.svg'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SubSiderbar',
  decorators: [withRouter],
  component: SubSiderbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof SubSiderbar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    extra: [<input placeholder="Search!" />],
    // primary: true,
    sub_navs: [
      { label: 'CICD', to: { path: '321' }, icon: cicd },
      { label: '项目协同', to: { path: '321' }, icon: venus },
      { label: '项目设置', to: { path: '321' }, icon: setting }
    ]
  }
}
