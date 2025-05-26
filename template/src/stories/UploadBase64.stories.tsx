import type { Meta, StoryObj } from '@storybook/react'
import UploadBase64 from '@src/stories/UploadBase64'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Upload',
  component: UploadBase64,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof UploadBase64>

export default meta
type Story = StoryObj<typeof meta>

const changeImageUrl = function (src: string) {
  console.log(src)
}
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    value: '',
    changeImageUrl
  }
}
