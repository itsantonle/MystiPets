import { useMemo } from "react"

import { BlurFilter, TextStyle } from "pixi.js"
import { Stage, Container, Sprite, Text } from "@pixi/react"
import Bunny from "./_templatesData/sprites/Bunny"
import BRDude from "./_templatesData/sprites/BRDude"

const App = () => {
  const blurFilter = useMemo(() => new BlurFilter(2), [])
  const bunnyUrl = "https://pixijs.io/pixi-react/img/bunny.png"
  return (
    <Stage
      width={800}
      height={600}
      options={{ background: 0x1099bb }}
    >
      <Bunny x={100} y={300} />
      <BRDude />
      <Sprite image={bunnyUrl} x={300} y={150} />

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
