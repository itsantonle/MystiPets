import { useMemo } from "react"

import { BlurFilter, TextStyle } from "pixi.js"
import { Stage, Container, Text } from "@pixi/react"

import BRDude from "./_templatesData/sprites/BRDude"
import Hydra from "./components/sprites/Hydra"
import Capycorn from "./components/sprites/Capycorn"

const App = () => {
  const blurFilter = useMemo(() => new BlurFilter(2), [])
  return (
    <Stage
      width={800}
      height={600}
      options={{ background: 0x1099bb }}
    >
      <BRDude />
      <Capycorn x={200} y={200}/>
      <Hydra x={100} y={100}/>

      <Container x={200} y={200}>
        <Text
          text="Hello World"
          anchor={0.5}
          x={220}
          y={150}
          filters={[blurFilter]}
          style={
            new TextStyle({
              align: "center",
              fill: "0xffffff",
              fontSize: 50,
              letterSpacing: 20,
              dropShadow: true,
              dropShadowColor: "#E72264",
              dropShadowDistance: 6,
            })
          }
        />
      </Container>
    </Stage>
  )
}

export default App
