import Hydra from "./pets/Hydra"
import Capycorn from "./pets/Capycorn"

export type petConfig = {petType: string, petXpos: number, petYpos: number}
const petSize = 384

const PetContainer = ({ petType, petXpos, petYpos}: petConfig) => {
    {switch(petType){
        case "Capycorn":
            return <Capycorn s={petSize} x={petXpos} y={petYpos}/>;
        case "Hydra":
            return <Hydra s={petSize} x={petXpos} y={petYpos}/>;
    }}
}

export default PetContainer
