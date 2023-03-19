import { useRouter } from 'next/router'
import Spinner from '~/components/atoms/Spinner'
import PokemonDetail from '~/components/organism/PokemonDetail'
import usePokeApi from '~/hooks/usePokeApi'
import Error from '~/pages/_error'

export default function DetailPage() {
  const router = useRouter()
  const { fetchPokemonDetail } = usePokeApi()
  const { data, isError, error, isLoading } = fetchPokemonDetail(
    router.query.id as string
  )

  if (isError) {
    return <Error statusCode={(error as Error).message} />
  }

  return (
    <div
      tw="
        flex
        justify-center
        sm:items-center
        min-h-[100vh]
      "
    >
      {isLoading && <Spinner />}
      {data && <PokemonDetail pokemon={data} onClickBackButton={router.back} />}
    </div>
  )
}
