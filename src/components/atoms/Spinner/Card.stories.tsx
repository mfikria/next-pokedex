import { ComponentStory, ComponentMeta } from '@storybook/react'
import Spinner from '.'

export default {
  title: 'components/atoms/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args}></Spinner>
)

export const Default = Template.bind({})
Default.args = {}
