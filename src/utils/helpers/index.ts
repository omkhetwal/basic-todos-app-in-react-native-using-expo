import { nanoid } from "nanoid/non-secure"
import { palette } from "../theme/colors"

export const getColors = () => {
  const colors: IColor[] = Object.keys(palette).map((paletteColor) => {
    return {
      id: `color_${nanoid()}`,
      code: palette[paletteColor as keyof typeof palette],
      name: paletteColor,
    }
  })
  return colors
}

export const getRandomColor = (max: number) => {
  return Math.floor(Math.random() * max)
}
