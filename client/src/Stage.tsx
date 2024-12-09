import { Stage, Container } from "@pixi/react"
import Header from "./components/Header"
import "./bootstrap/bootstrapSass.scss"
import PetContainer from "./components/PetContainer"
import * as React from "react"
import Panel from "./components/InteractivePanel"
import { Pet } from "./types/Pet"
// import styles from "./components/ui/Styles"
type PetContainerProp = {
  pet: Pet
}
const PetStage = ({ pet }: PetContainerProp) => {
  return (
    <>
      <Header />
      <Stage
        width={800}
        height={475}
        options={{ background: 0xd83d }}
      >
        <Container x={160} y={200}>
          <PetContainer
            petType={pet.pet_type}
            petXpos={230}
            petYpos={pet.pet_type == "Hydra" ? 20 : 10}
          />
          {/* <PetContainer
            petType="Capycorn"
            petXpos={400}
            petYpos={50}
          /> */}
        </Container>
      </Stage>

      <Panel />
      {/* <Footer/> */}
    </>
  )
}

export default PetStage
