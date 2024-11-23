import one from "./7.png"
import two from "./8.png"
import three from "./9.png"
import four from "./10.png"
import { Texture } from "pixi.js"

const imagesArr = [one, two, three, four]
const fetch = () => {
  const textureArr = imagesArr.map((element) => Texture.from(element))
  return textureArr
}
const frames: Texture[] = fetch()

export default frames
