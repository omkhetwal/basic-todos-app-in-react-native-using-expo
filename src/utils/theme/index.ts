import { createBox, createText, createTheme } from "@shopify/restyle"
import { colors } from "./colors"
import { textVariants } from "./text-variants"

export const theme = createTheme({
  breakpoints: {},
  colors: colors,
  textVariants: textVariants,
  spacing: {
    "1": 4,
    "2": 8,
    "3": 12,
    "4": 16,
    "5": 20,
    "6": 24,
    "10": 40,
  },
  borderRadii: {
    rounded: 4,
    roundedXl: 8,
    rounded2Xl: 16,
  },
})

export type Theme = typeof theme

export const Box = createBox<Theme>()
export const Text = createText<Theme>()

export default theme
