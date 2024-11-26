import { Stage, Container } from "@pixi/react"
import PetContainer from "./components/PetContainer"
// import PetContainer from "./components/PetContainer"

const App = () => {
  return (
    <Stage
      width={800}
      height={600}
      options={{ background: 0xD83D  }}
    >
      {/* <PetContainer type  */}
      <Container x={160} y={200}>
        <PetContainer petType ="Hydra" petXpos={100} petYpos={100}/>
        <PetContainer petType ="Capycorn" petXpos={160} petYpos={200}/>
      </Container>
    </Stage>
  )
}

export default App
