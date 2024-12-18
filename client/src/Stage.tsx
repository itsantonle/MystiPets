import { Stage, Container, Sprite } from "@pixi/react"
import Header from "./components/Header"
import "./bootstrap/bootstrapSass.scss"
import PetContainer from "./components/PetContainer"
import * as React from "react"
import Panel from "./components/InteractivePanel"
import { Pet } from "./types/Pet"
import bgImage from '/assets/BG.png'
import nestImg from '/assets/nest.png'

type PetContainerProp = {
  pet: Pet
}

const PetStage = ({ pet }: PetContainerProp) => {
  const [stageSize, setStageSize] = React.useState({ width: window.innerWidth, height: window.innerHeight })

  React.useEffect(() => {
    // Prevent scrolling
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleResize = () => {
      setStageSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      // Reset styles when component unmounts
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [])

  // Calculate scale to fit background while maintaining aspect ratio
  const calculateBackgroundScale = () => {
    const bgNativeWidth = 800 // Original background width
    const bgNativeHeight = 475 // Original background height
    const scaleX = stageSize.width / bgNativeWidth
    const scaleY = stageSize.height / bgNativeHeight
    return Math.max(scaleX, scaleY)
  }

  const scale = calculateBackgroundScale()
  const bgWidth = 800 * scale
  const bgHeight = 475 * scale
  const bgX = (stageSize.width - bgWidth) / 2
  const bgY = (stageSize.height - bgHeight) / 2

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0,
      overflow: 'hidden'
    }}>
      <Header />
      <Stage
        width={stageSize.width}
        height={stageSize.height}
        options={{ backgroundAlpha: 0 }}
      >
        <Sprite
          image={bgImage}
          width={bgWidth}
          height={bgHeight}
          x={bgX}
          y={bgY}
        />
        <Container x={stageSize.width / 2 - 240} y={stageSize.height / 2}>
          <Sprite
            image={nestImg}
            width={700}
            height={400}
            x={-110}
            y={5}
          />
          <PetContainer
            petType={pet.pet_type}
            petXpos={230}
            petYpos={pet.pet_type == "Hydra" ? 20 : 10}
          />
        </Container>
      </Stage>
      <Panel />
    </div>
  )
}

export default PetStage
