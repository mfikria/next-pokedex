import { Pokemon } from 'pokenode-ts'
import Spinner from '~/components/atoms/Spinner'
import PokemonCard from '~/components/molecules/PokemonCard'
import PokemonCardShimmer from '~/components/molecules/PokemonCard/Shimmer'

export type TPokemonGrid = React.HTMLProps<HTMLDivElement> & {
  isLoading?: boolean
  isLoadingMore?: boolean
  onClickPokemon?: (pokemon: Pokemon) => void
  pokemons: Pokemon[]
}

function PokemonGrid(props: TPokemonGrid) {
  const {
    pokemons,
    isLoading = false,
    isLoadingMore = false,
    onClickPokemon,
    ...rest
  } = props
  return (
    <div {...rest}>
      <div
        tw="
          grid
          grid-cols-1
          gap-4
          max-w-[900px]
          mx-auto
          my-0
          p-4
          sm:(
            grid-cols-2
          )
          md:(
            grid-cols-3
          )
        "
      >
        {isLoading ? (
          Array(9)
            .fill(null)
            .map((_, i) => <PokemonCardShimmer key={i} />)
        ) : (
          <>
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onClick={() => onClickPokemon?.(pokemon)}
              />
            ))}
          </>
        )}
      </div>
      {isLoadingMore && <Spinner tw="my-6" />}
    </div>
  )
}

export default PokemonGrid
