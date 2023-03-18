import { ComponentStory, ComponentMeta } from "@storybook/react";
import PokemonDetail from ".";
import pokemonList from '~/mocks/pokemon.json'

export default {
  title: "components/organism/PokemonDetail",
  component: PokemonDetail,
} as ComponentMeta<typeof PokemonDetail>;

const Template: ComponentStory<typeof PokemonDetail> = (args) => <PokemonDetail {...args}></PokemonDetail>;

export const Default = Template.bind({});
Default.args = {
  pokemon: pokemonList[0]
};
