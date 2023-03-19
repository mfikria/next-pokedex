import { useInfiniteQuery } from "react-query"
import PokeApi from "~/services/PokeApi"

const pokeApiClient = new PokeApi()

function usePokeApi() {
  const fetchPokemonList = () => useInfiniteQuery(
    'pokemons',
    ({ pageParam }) => pokeApiClient.getPokemonList(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const limit = 9
        if (allPages.length > 0 && (lastPage.length < limit || lastPage.length === 0)) return
    
        const offset = allPages.length * limit
        return {
          offset,
          limit
        } 
      }
    }
  )

  return {
    fetchPokemonList
  }
}

export default usePokeApi