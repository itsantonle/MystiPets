import { AnimatedSprite } from "@pixi/react"
import {Hydra_Idle, Capycorn_Idle} from "./Animations"

export type coord = { x: number; y: number }
const Asprite = ({ x, y }: coord) => {
    
  return (
    <>
      <AnimatedSprite
        anchor={0.5}
        textures={Hydra_Idle}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.1}
        interactive
        x={x} 
        y={y}
      />

    </>
  )
}

export default Asprite
