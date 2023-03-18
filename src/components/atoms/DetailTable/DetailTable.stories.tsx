import { ComponentStory, ComponentMeta } from "@storybook/react";
import DetailTable from ".";

export default {
  title: "components/atoms/DetailTable",
  component: DetailTable,
} as ComponentMeta<typeof DetailTable>;

const Template: ComponentStory<typeof DetailTable> = (args) => <DetailTable {...args}></DetailTable>;

export const Default = Template.bind({});
Default.args = {
  title: 'Pokemon Detail',
  details: {
    'Species': 'Seed',
    'Habitat': 'Grassland',
    'Height': '7m'
  }
};
