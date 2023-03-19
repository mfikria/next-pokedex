import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typography from '.'

export default {
  title: 'components/atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'lead',
          'paragraph',
          'small',
        ],
      },
    },
  },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}></Typography>
)

export const Default = Template.bind({})
Default.args = {
  variant: 'h1',
  children: 'Lorem ipsum',
}
