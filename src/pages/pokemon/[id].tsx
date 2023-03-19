import { useRouter } from "next/router";
import PokemonDetail from "~/components/organism/PokemonDetail";
import usePokeApi from "~/hooks/usePokeApi";

export default function DetailPage() {
  const router = useRouter()
  const { fetchPokemonDetail } = usePokeApi()
  const { data } = fetchPokemonDetail(router.query.id as string)
  return (
    <div
      tw="
        flex
        justify-center
        sm:items-center
        min-h-[100vh]
      "
    >
      {data && 
        <PokemonDetail
          pokemon={data}
          onClickBackButton={router.back}
        />
      }
    </div>
  )
}