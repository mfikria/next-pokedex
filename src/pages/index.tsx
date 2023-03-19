import usePokeApi from "~/hooks/usePokeApi";
import useScrollToEnd from "~/hooks/useScrollToEnd";
import Logo from '~/components/svg/pokemon-logo.svg'
import PokemonGrid from "~/components/organism/PokemonGrid";
import flatten from 'lodash/flatten'
import debounce from 'lodash/debounce'

export default function Home() {
  const { fetchPokemonList } = usePokeApi()
  const { data, fetchNextPage, isLoading, isFetchingNextPage } = fetchPokemonList()
  useScrollToEnd((isEnd) => {
    if (isEnd && !isFetchingNextPage) {
      debounce(fetchNextPage, 300)()
    }
  })
  return (
    <>
      <div tw="flex justify-center w-full mb-4">
        <Logo />
      </div>
      <PokemonGrid
        isLoading={isLoading}
        isLoadingMore={isFetchingNextPage}
        pokemons={flatten(data?.pages)}
      />
    </>
  );
}
