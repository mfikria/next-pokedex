import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  '*': {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
    fontFamily: `'Montserrat', sans-serif`,
    boxSizing: 'border-box'
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles