import { increaseVal, decreaseVal } from "./barValueUtil"
import Panel from "../../components/InteractivePanel";
import * as React from "react"

export const manageHappiness = () => {
    const [happiness, setHappiness] = React.useState(0); // <- this value needs to be taken from DB

    const isHappy = () => { 
        const feelsHappy = increaseVal(happiness)
        setHappiness(feelsHappy)  

    }
    return isHappy

    // const isSad = () => {  //<- This is linked to penalty
    //     const feelsSad = decreaseVal(happiness)
    //     setHappiness(feelsSad)
    // }
    
}


// //template
// const [something, setSomething] = React.useState(0); //<- for counter placeholders

// const doSomething2 = () => {    //<- event listener placeholder
//     setSomething2((something2 + 5) * 2)  
// }