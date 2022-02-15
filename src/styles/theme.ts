import { css, CSSProp } from 'styled-components'

type BackQuoteArgs = string[]

const sizes: { [key: string]: number } = {
  desktop: 1024,
  tablet: 768,
}

interface Media {
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined
}

const media: Media = {
  desktop: () => undefined,
  tablet: () => undefined,
}

const makeMedia = (args: BackQuoteArgs, label: string) => {
  return css`
    @media (max-width: ${sizes[label]}px) {
      ${args}
    }
  `
}

Object.keys(sizes).reduce((acc: Media, label: string) => {
  if (label === 'desktop' || label === 'tablet')
    acc[label] = (...args: BackQuoteArgs) => makeMedia(args, label)

  return acc
}, media)

const colors = {
  white: '#ffffff',
  black: '#000000',
}

const theme = {
  colors,
  media,
}

export default theme
