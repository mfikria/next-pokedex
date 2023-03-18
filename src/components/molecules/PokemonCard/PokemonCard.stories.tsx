import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";
import pokemonList from '~/mocks/pokemon.json'

export default {
  title: "components/atoms/PokemonCard",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const Default = Template.bind({});
Default.args = {
  pokemon: pokemonList[0]
};
