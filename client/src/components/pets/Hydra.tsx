import { AnimatedSprite } from "@pixi/react"
import { Pet } from "../../types/Pet"
import { hydraAnimationDisplay } from "../../utils/interfaceUtil/animationUtil"

export type hydraProp = { x: number; y: number; s: number; pet: Pet }

const HydraSprite = ({ x, y, s, pet }: hydraProp) => {
  return (
    <>
      <AnimatedSprite
        anchor={0.5}
        textures={hydraAnimationDisplay(
          pet!.happiness_status!,
          false,
          false,
          pet!.is_dead!,
          pet!.has_left!,
        )}
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
