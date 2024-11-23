import { ImageSource, Texture } from "pixi.js"

type Imglink = string | ImageSource

export const convertToTexture = (source: Imglink): Texture => {
  return Texture.from(source)
}

export const mapTexture = (sourceArray: Imglink[]): Texture[] => {
  return sourceArray.map((source) => Texture.from(source))
}
