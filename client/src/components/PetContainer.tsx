import Hydra from "./pets/Hydra"
import Capycorn from "./pets/Capycorn"
import { Pet } from "../types/Pet"

export type petConfig = {
  petType: string
  petXpos: number
  petYpos: number
  pet: Pet
}
const petSize = 384

const PetContainer = ({
  petType,
  petXpos,
  petYpos,
  pet,
}: petConfig) => {
  {
    switch (petType) {
      case "Capycorn":
        return (
          <Capycorn s={petSize} x={petXpos} y={petYpos} pet={pet} />
        )
      case "Hydra":
        return <Hydra s={petSize} x={petXpos} y={petYpos} pet={pet} />
    }
  }
}

export default PetContainer
