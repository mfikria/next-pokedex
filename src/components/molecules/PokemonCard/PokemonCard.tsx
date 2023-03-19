import { Pokemon } from "pokenode-ts";
import Card from "~/components/atoms/Card";
import Image from 'next/image'
import { getPokemonTypeGradientBackgroundColor } from "~/utils/colors";
import Typography from "~/components/atoms/Typography";

export type TPokemonCard = React.HTMLProps<HTMLDivElement> & {
  pokemon: Pokemon;
};

function PokemonCard(props: TPokemonCard) {
  const { pokemon, ...rest } = props;
  const mainType = pokemon.types[0].type.name
  return (
    <Card
      css={getPokemonTypeGradientBackgroundColor(mainType)}
      tw="
        w-full
        h-[200px]
        cursor-pointer
      "
      {...rest}
    >
      <div
        tw="
          w-[150px]
          h-[150px]
          relative
        "
      >
        <Image src={pokemon.sprites.other?.dream_world.front_default!} alt={pokemon.name} fill />
      </div>
      
      <Typography variant="h3" tw="uppercase mb-0 font-bold">
        {pokemon.name}
      </Typography>
    </Card>
  )
}

export default PokemonCard