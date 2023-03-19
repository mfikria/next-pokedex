import { NamedAPIResourceList, Pokemon } from "pokenode-ts";

class PokeApi {
  private baseUrl = "https://pokeapi.co/api/v2";

  public async getPokemonList(props): Promise<Pokemon[]> {
    const { limit = 9, offset = 0 } = props || {}
    const response = await fetch(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const { results } = await response.json() as NamedAPIResourceList;
    const pokemons = await Promise.all(results.map(pokemon => this.getPokemonDetail(pokemon.name)))
    return pokemons
  }

  public async getPokemonDetail(id: string | number): Promise<Pokemon> {
    const response = await fetch(`${this.baseUrl}/pokemon/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json() as Pokemon;
    return data;
  }
}

export default PokeApi;