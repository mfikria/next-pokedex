import tw from "twin.macro";
import Card from "~/components/atoms/Card";

const PokemonCardShimmer = tw(Card)`
  bg-gray-200
  animate-pulse
  h-[200px]
  w-full
`

export default PokemonCardShimmer