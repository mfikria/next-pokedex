import tw from 'twin.macro'

const Card = tw.div`
  p-4
  flex
  h-full
  w-full
  flex-col
  items-center
  justify-between
  rounded-2xl
  shadow-lg
  transition-all
  duration-500
  ease-in-out
  will-change-transform
  overflow-hidden
  hover:(
    shadow-gray-300
  )
`

export default Card
