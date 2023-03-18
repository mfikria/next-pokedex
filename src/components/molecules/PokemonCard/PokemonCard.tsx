import { Pokemon } from "pokenode-ts";
import tw from "twin.macro";

export type TPokemonCard = {
  pokemon: Pokemon;
};

function PokemonCard(props: TPokemonCard) {
  const { pokemon } = props;
  return <div css={tw`w-2 h-2 bg-red-50`}>test</div>;
}

export default PokemonCard