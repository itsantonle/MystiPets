import { Stage, Container } from "@pixi/react"
import Hydra from "./components/pets/Hydra"
import Capycorn from "./components/pets/Capycorn"
// import PetContainer from "./components/PetContainer"
import Header from "./components/Header"
import "./bootstrap/bootstrapSass.scss"


const App = () => {
  return (
    <>
    <Header />
    <Stage
      width={800}
      height={600}
      options={{ background: 0xD83D }}
    >
      {/* <PetContainer type  */}
      <Container x={160} y={200}>
        <Capycorn x={10} y={90} />
        <Hydra x={420} y={90} />
      </Container>
    </Stage>
    </>
  )
}

export default App
