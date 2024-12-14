import { AnimatedSprite } from "@pixi/react"
import {Capycorn_Idle} from "../img/Animations"


import { useState } from "react";

export type dimensions = { x: number; y: number; s: number }


import { CapycornAnim } from "../PetAnimation";



const CapycornSprite = ({ x, y, s}: dimensions) => {
  const { capyEmotes } = CapycornAnim();
    
  return (
    <>
      <AnimatedSprite
        anchor={0.5}
        textures={capyEmotes} // replace with Emote variable (proposed solution ini)
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.07}
        interactive
        x={x} 
        y={y}
        width={s} 
        height={s}
      />

    </>
  )
}


export default CapycornSprite