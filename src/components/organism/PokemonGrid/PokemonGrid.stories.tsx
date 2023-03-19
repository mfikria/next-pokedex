import { ComponentStory, ComponentMeta } from '@storybook/react'
import PokemonGrid from '.'
import pokemonList from '~/mocks/pokemon.json'

export default {
  title: 'components/organism/PokemonGrid',
  component: PokemonGrid,
  argTypes: {
    isLoading: { control: 'boolean' },
    isLoadingMore: { control: 'boolean' },
  },
} as ComponentMeta<typeof PokemonGrid>

const Template: ComponentStory<typeof PokemonGrid> = (args) => (
  <PokemonGrid {...args}></PokemonGrid>
)

export const Default = Template.bind({})
Default.args = {
  isLoading: false,
  isLoadingMore: false,
  pokemons: pokemonList,
}
