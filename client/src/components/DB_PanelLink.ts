import axios from "axios"
import { useEffect, useState } from "react"
import { manageHappiness } from "../utils/interfaceUtil/happinessBarUtil"
import { manageHunger } from "../utils/interfaceUtil/hungerBarUtil"

// Delete after DB connection----------------------
const happiness = 0
const hunger = 0
const hp = 0
// --------------------------------


// const url = '' //Add DB URL here, uncomment if real DB is connected

//--------------------------------------------FETCH DATA--------------------------------------------

export const getValues = () => {
    const [happyValue, setHappyValue] = useState<number>(0);
    const [hungerValue, setHungerValue] = useState<number>(0);
    const [healthValue, setHealthValue] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getData = async() => {
        try{
            // Delete after DB connection----------------------
            setHappyValue(happiness) 
            setHungerValue(hunger)
            setHealthValue(hp)
            // --------------------------------------

            // //Uncomment if reall DB is connected
            // const response = await axios.get(url)
            // setHappyValue(response.data.happiness) //<- change happiness, health and hunger here to the column names from DB table
            // setHungerValue(response.data.hunger)
            // setHealthValue(response.data.health) 
        }catch(error){
            if(axios.isAxiosError(error)){
                setError(error.message)
            }else {
                setError("Unknown Error occurred")
            }
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    return {happyValue, hungerValue, healthValue, error, loading}
}


//--------------------------------------------SEND DATA--------------------------------------------

export const sendValues = () => {
    const {isHappyValue} = manageHappiness();
    const {isHungryValue} = manageHunger();
    // const {newHealthValue} = manageHealth();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const sendData = async() => {
        try{
            // Delete after DB connection----------------------
            console.log(isHappyValue, isHungryValue)
            // ---------------------------------------------

            // //Uncomment if reall DB is connected
            // const response = await axios.post(url, {
            //     happiness: isHappyValue,
            //     hunger: isHungryValue,
            //     // health: newHealthValue,
            // });

            // console.log("Successfully sent", response.data)

        }catch(error){
            if(axios.isAxiosError(error)){
                setError(error.message)
            }else {
                setError("Unknown Error occurred")
            }
        }finally{
            setLoading(false)
        }

        useEffect(() => {
            sendData()
        }, [])
    }

}