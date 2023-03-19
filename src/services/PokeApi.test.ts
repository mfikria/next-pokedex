import PokeApi from './PokeApi'

describe('PokeApi', () => {
  let pokeApi: PokeApi
  let mockFetch: jest.Mock

  beforeEach(() => {
    pokeApi = new PokeApi()
    mockFetch = jest.fn()
    // @ts-ignore
    global.fetch = mockFetch
  })

  afterEach(() => {
    // @ts-ignore
    global.fetch.mockReset()
  })

  describe('getPokemonList', () => {
    it('returns a list of Pokemon with the expected length', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({
          results: [
            { name: 'bulbasaur' },
            { name: 'charmander' },
            { name: 'squirtle' },
          ],
        }),
      }
      mockFetch.mockResolvedValue(mockResponse)

      const pokemons = await pokeApi.getPokemonList({ limit: 3, offset: 0 })
      expect(pokemons.length).toEqual(3)
    })

    it('throws an error if the API request fails', async () => {
      const mockResponse = {
        ok: false,
        status: 404,
      }
      mockFetch.mockResolvedValue(mockResponse)

      await expect(
        pokeApi.getPokemonList({ limit: 20, offset: 1000 })
      ).rejects.toThrow()
    })
  })

  describe('getPokemonDetail', () => {
    it('returns a Pokemon with the expected properties', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({
          name: 'bulbasaur',
          types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
        }),
      }
      mockFetch.mockResolvedValue(mockResponse)

      const pokemon = await pokeApi.getPokemonDetail('bulbasaur')
      expect(pokemon.name).toEqual('bulbasaur')
      expect(pokemon.types).toBeDefined()
    })

    it('throws an error if the API request fails', async () => {
      const mockResponse = {
        ok: false,
        status: 404,
      }
      mockFetch.mockResolvedValue(mockResponse)

      await expect(
        pokeApi.getPokemonDetail('invalid-pokemon')
      ).rejects.toThrow()
    })
  })
})
