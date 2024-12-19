import { AnimatedSprite } from "@pixi/react"
import { Capycorn_Idle } from "../img/Animations"
import { capycornAnimationDisplay } from "../../utils/interfaceUtil/animationUtil"
import { AuthContext, useAuth } from "../../context/AuthContext"
import { usePets } from "../../services/queries/petQueries"
import { Pet } from "../../types/Pet"
import { useRef, useState } from "react"
import { Resource, Texture } from "pixi.js"
// import {Capycorn_Happy} from "../img/Animations"
// import {Capycorn_Sad} from "../img/Animations"

// import { useState } from "react"
//'client/src/utils/interfaceUtil/healthBarUtil';
// do we have to initialized an emote variable?

// if HP >= 81 and Happy > 50 and Hunger > 50
//   Emote == Happy

// else if HP >= 51 and Happy > 50 and Hunger > 50
//  Emote == Idle

// else if HP >= 21
// Emote == Sad

// else2
// Emote == Dead

export type capyProp = {
  x: number
  y: number
  s: number
  pet: Pet
}

const CapycornSprite = ({ x, y, s, pet }: capyProp) => {
  // useEffect to update the textures

  return (
    <>
      <AnimatedSprite
        anchor={0.5}
        textures={capycornAnimationDisplay(
          pet!.happiness_status!,
          false,
          false,
          pet!.is_dead!,
          pet!.has_left!,
        )} // replace with Emote variable (proposed solution ini)
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
