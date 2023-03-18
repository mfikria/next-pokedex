import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";

export default {
  title: "components/atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const Default = Template.bind({});
Default.args = {
  children: 'Card'
};
