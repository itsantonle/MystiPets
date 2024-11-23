import { Sprite } from "@pixi/react"
import { convertToTexture } from "../loaders/textureLoader"

const bunnyUrl = convertToTexture(
  "https://pixijs.io/pixi-react/img/bunny.png",
)

export type coord = { x: number; y: number }
const Bunny = ({ x, y }: coord) => {
  return <Sprite texture={bunnyUrl} x={x} y={y} />
}
export default Bunny
