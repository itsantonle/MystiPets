import { Stage, Container } from "@pixi/react"
import Hydra from "./components/Hydra"
import Capycorn from "./components/Capycorn"

const App = () => {
  return (
    <Stage
      width={800}
      height={600}
      options={{ background: 0xD83D }}
    >
      <Container x={160} y={200}>
        <Capycorn x={220} y={80}/>
        <Hydra x={220} y={140}/>
      </Container>
    </Stage>
  )
}

export default App
