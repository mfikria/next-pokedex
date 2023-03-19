import {
  getPokemonTypeColor,
  getPokemonTypeGradientBackgroundColor,
} from './colors'

describe('getPokemonTypeColor', () => {
  it('returns the correct color for a given Pokemon type', () => {
    expect(getPokemonTypeColor('fire')).toEqual('#EE8130')
    expect(getPokemonTypeColor('electric')).toEqual('#F7D02C')
    expect(getPokemonTypeColor('rock')).toEqual('#B6A136')
  })

  it('returns the default color for an invalid Pokemon type', () => {
    expect(getPokemonTypeColor('invalidType')).toEqual('#A8A77A')
  })
})
