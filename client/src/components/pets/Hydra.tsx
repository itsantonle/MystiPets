import { AnimatedSprite } from "@pixi/react"
import {Hydra_Idle} from "../img/Animations"
import { HydraAnim } from "../PetAnimation";



export type dimensions = { x: number; y: number; s: number }

const HydraSprite = ({ x, y, s}: dimensions) => {
  const { hydraEmotes } = HydraAnim();

  return (
    <>
      <AnimatedSprite
        anchor={0.5}
        textures={hydraEmotes}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.03}
        interactive
        x={x} 
        y={y}
        width={s} 
        height={s}
      />

    </>
  )
}

export default HydraSprite