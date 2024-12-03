import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink";
import { useState, useEffect } from "react";


// const {happyValue} = getValues();

export const happyValue = 100

export const manageHappiness = () => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [isHappyValue, setIsHappyValue] =  useState(happyValue);

    const isPlaying = () => setIsHappyValue(prevValue => increaseVal(prevValue))
    const isSad = () => setIsHappyValue(prevValue => decreaseVal(prevValue))

    const isPlayingClicked = () => {   //<- triggered by play button
        isPlaying()
        return isHappyValue
    };

    // useEffect for timer
    useEffect(() => {
        const timedEvent = setTimeout(() => {isSad()}, 2000) //this is 60 seconds

        setTimer(timedEvent);
        return () => clearTimeout(timedEvent)
    },[isHappyValue]) 

    // useEffect for sending to DB
    useEffect(() => {
        const sendData = setInterval(() => {
            sendValues()
        }, 5000) //this is 5 seconds

        return () => clearInterval(sendData)
    },[isHappyValue])

    return {isHappyValue, isPlayingClicked}
}
