import usePokeApi from '~/hooks/usePokeApi'
import useScrollToEnd from '~/hooks/useScrollToEnd'
import Logo from '~/components/svg/pokemon-logo.svg'
import PokemonGrid from '~/components/organism/PokemonGrid'
import flatten from 'lodash/flatten'
import debounce from 'lodash/debounce'
import { useRouter } from 'next/router'
import Error from '~/pages/_error'

export default function IndexPage() {
  const router = useRouter()
  const { fetchPokemonList } = usePokeApi()
  const { data, fetchNextPage, isLoading, isFetchingNextPage, isError, error } =
    fetchPokemonList()

  useScrollToEnd(
    (isEnd) => {
      if (isEnd && !isFetchingNextPage) {
        debounce(fetchNextPage, 200)()
      }
    },
    [data]
  )

  if (isError) {
    return <Error statusCode={(error as Error).message} />
  }

  return (
    <>
      <div tw="flex justify-center w-full mb-4">
        <Logo data-testid="site-logo" />
      </div>
      <PokemonGrid
        isLoading={isLoading}
        isLoadingMore={isFetchingNextPage}
        pokemons={flatten(data?.pages)}
        onClickPokemon={(pokemon) => {
          router.push(`/pokemon/${pokemon.name}`)
        }}
      />
    </>
  )
}
