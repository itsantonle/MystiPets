import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink";
import { useState, useEffect } from "react";
import {manageHealth} from "../interfaceUtil/healthBarUtil";
import { timerValue } from "./barValueUtil";


// const {hungerValue} = getValues(); //uncomment if DB is connected

export const hungerValue = 100

export const manageHunger = () => {
    const {trackHungerDecrease} = manageHealth();

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [isHungryValue, setIsHungryValue] =  useState(hungerValue);

    const isEating = () => setIsHungryValue(prevValue => increaseVal(prevValue))
    const isHungry = () => setIsHungryValue(prevValue => decreaseVal(prevValue))

    const isEatingClicked = () => {  //<- triggered when food button is pressed
        isEating()
        return isHungryValue
    };

    // useEffect for timer
    useEffect(() => {
        const timedEvent = setTimeout(() => {isHungry(), trackHungerDecrease()}, 5000) //this is 60 secs

        setTimer(timedEvent);
        return () => clearTimeout(timedEvent)
    },[isHungryValue]) 

    // useEffect for sending to DB
    // uncomment after connected to DB
    // useEffect(() => {
    //     const sendData = setInterval(() => {
    //         sendValues()
    //     }, 5000) //this is 5 seconds

    //     return () => clearInterval(sendData)
    // },[isHungryValue])

    return {isHungryValue, isEatingClicked} //isHungryValue is exported for testing without DB
}