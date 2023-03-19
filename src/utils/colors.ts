import { Types } from 'pokenode-ts'
import tw from 'twin.macro'

export function getPokemonTypeGradientBackgroundColor(pokemonType: string) {
  const colors = {
    normal: tw`from-[#A8A77A]`,
    fire: tw`from-[#EE8130]`,
    water: tw`from-[#6390F0]`,
    electric: tw`from-[#F7D02C]`,
    grass: tw`from-[#7AC74C]`,
    ice: tw`from-[#96D9D6]`,
    fighting: tw`from-[#C22E28]`,
    poison: tw`from-[#A33EA1]`,
    ground: tw`from-[#E2BF65]`,
    flying: tw`from-[#A98FF3]`,
    psychic: tw`from-[#F95587]`,
    bug: tw`from-[#A6B91A]`,
    rock: tw`from-[#B6A136]`,
    ghost: tw`from-[#735797]`,
    dragon: tw`from-[#6F35FC]`,
    dark: tw`from-[#705746]`,
    steel: tw`from-[#B7B7CE]`,
    fairy: tw`from-[#D685AD]`,
  }

  return [colors[pokemonType] || colors.normal, tw`bg-gradient-to-b to-white`]
}

export function getPokemonTypeColor(pokemonType: string): string {
  const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  }

  return colors[pokemonType] || colors.normal
}
