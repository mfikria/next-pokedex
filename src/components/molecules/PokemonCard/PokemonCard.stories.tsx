import { ComponentStory, ComponentMeta } from "@storybook/react";
import PokemonCard from ".";
import pokemonList from '~/mocks/pokemon.json'

export default {
  title: "components/molecules/PokemonCard",
  component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = (args) => <PokemonCard {...args}></PokemonCard>;

export const Default = Template.bind({});
Default.args = {
  pokemon: pokemonList[0]
};
