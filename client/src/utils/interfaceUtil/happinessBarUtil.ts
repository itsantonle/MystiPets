import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink";
import { useState, useEffect } from "react";
import {manageHealth} from "../interfaceUtil/healthBarUtil";
import { timerValue } from "./barValueUtil";


export const manageHappiness = (DBhappyVal: number) => {
    const {trackDecrease} = manageHealth();

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [utilHappyVal, setUtilHappyVal] =  useState(DBhappyVal);

    const isPlaying = () => setUtilHappyVal(prevValue => increaseVal(prevValue))
    const isSad = () => setUtilHappyVal(prevValue => decreaseVal(prevValue))

    const isPlayingClicked = () => {   //<- triggered by play button
        isPlaying()
        return utilHappyVal
    };

    // useEffect for timer
    useEffect(() => {
        const timedEvent = setTimeout(() => {isSad(), trackDecrease()}, 6000) //this is 2 seconds

        setTimer(timedEvent);
        return () => clearTimeout(timedEvent)
    },[utilHappyVal]) 
}
