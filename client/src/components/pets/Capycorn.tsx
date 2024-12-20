import { AnimatedSprite } from "@pixi/react"
import { capycornAnimationDisplay } from "../../utils/interfaceUtil/animationUtil"
import { Pet } from "../../types/Pet"

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
        )}
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
