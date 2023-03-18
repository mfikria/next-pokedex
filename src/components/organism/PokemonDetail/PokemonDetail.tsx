import { Pokemon } from "pokenode-ts"
import Card from "~/components/atoms/Card"
import Image from 'next/image'
import { getPokemonTypeColor, getPokemonTypeGradientBackgroundColor } from "~/utils/colors"
import DetailTable from "~/components/atoms/DetailTable"
import Badge from "~/components/atoms/Badge"
import tw from "twin.macro"
import BackIcon from '~/components/svg/back.svg'

export type TPokemonDetail = React.HTMLProps<HTMLDivElement> & {
  pokemon: Pokemon
  onClickBackButton: () => void
}

const shadowStyles = tw`
  after:(
    content-['']
    block
    absolute
    -bottom-8
    h-2
    w-full
    shadow-[0px_0px_15px_0px_rgba(0,0,0,0.9)]
    bg-gray-400
    opacity-20
    -translate-x-2/4
    translate-y-0
    transition-transform
    rounded-[50%]
  )
`

function PokemonDetail(props: TPokemonDetail) {
  const { pokemon, onClickBackButton, ...rest } = props
  const mainType = pokemon.types[0].type.name

  const detailStats = {
    'HP': 0,
    Attack: 0,
    Defense: 0,
    'Special-attack': 0,
    'Special-defense': 0,
    'Speed': 0,
  }
  
  return (
    <Card
      tw="
        flex
        flex-col
        p-0
        max-w-[800px]
        shadow-none
        rounded-none
        sm:(
          flex-row
          h-[500px]
          shadow-lg
          rounded-2xl
        )
      "
      {...rest}
    >
      <div
        css={getPokemonTypeGradientBackgroundColor(mainType)}
        tw="
          w-full
          h-full
          flex
          items-center
          justify-center
          min-h-[300px]
          sm:(
            w-1/2
          )
        "
      >
        <BackIcon
          tw="
            absolute
            top-4
            left-4
            w-9
            h-9
            cursor-pointer
          "
          onClick={onClickBackButton}
        />
        <div
          tw="
            w-[150px]
            h-[150px]
            relative
            sm:(
              w-[200px]
              h-[200px]
            )
          "
          css={[shadowStyles]}
        >
          <Image src={pokemon.sprites.other?.dream_world.front_default!} alt={pokemon.name} fill tw="animate-bounce" />
        </div>
      </div>
      <div
        tw="
          w-full
          h-full
          p-4
          sm:(
            w-1/2
          )
        "
      >
        <div tw="mb-4">
          {pokemon.types.map(({type}) => (
            <Badge
              color={getPokemonTypeColor(type.name)}
              tw="mr-1"
            >
              {type.name}
            </Badge>
          ))}
        </div>
        <DetailTable
          title={pokemon.name.toLocaleUpperCase()}
          details={detailStats}
        />
      </div>
    </Card>
  )
}

export default PokemonDetail