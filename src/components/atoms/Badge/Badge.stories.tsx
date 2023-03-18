import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from ".";

export default {
  title: "components/atoms/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args}></Badge>;

export const Default = Template.bind({});
Default.args = {
  children: 'Grass',
  color: '#A8A77A'
};
