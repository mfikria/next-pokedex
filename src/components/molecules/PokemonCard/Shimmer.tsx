import Card from '~/components/atoms/Card'

const PokemonCardShimmer = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <Card
      tw="
        bg-gray-200
        animate-pulse
        h-[200px]
        w-full
      "
      data-testid="pokemon-card-shimmer"
      {...props}
    />
  )
}

export default PokemonCardShimmer
