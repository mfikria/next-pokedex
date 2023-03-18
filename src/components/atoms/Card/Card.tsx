import tw from "twin.macro";

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
  cursor-pointer
  transition-all
  duration-500
  ease-in-out
  will-change-transform
  hover:(
    scale-105
    shadow-gray-300
    -translate-y-3
  )
`;

export default Card;
