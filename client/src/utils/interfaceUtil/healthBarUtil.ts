import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink";
import { useState, useEffect } from "react";
import {manageHappiness} from "../interfaceUtil/happinessBarUtil";
import {manageHunger} from "../interfaceUtil/hungerBarUtil";
import {increaseSizeHP} from "../../components/healthbar";


const healthValue = 100


export const manageHealth = () => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [isHealthyValue, setisHealthyValue] =  useState(healthValue);

    // const {isHappyValue} = manageHappiness();
    // const {isHungryValue} = manageHunger();

    const isCared = () => setisHealthyValue(prevValue => increaseVal(prevValue))
    const isNeglected = () => setisHealthyValue(prevValue => decreaseVal(prevValue))

    // const isCaredFor = () => {   //<- should be triggered when either the hungerBar or happinessBar increases
    //     isCared()
    //     return isHealthyValue
    // };

    const [hungerIncreaseCount, setHungerIncreaseCount] = useState(0);
    const [happinessIncreaseCount, setHappinessIncreaseCount] = useState(0);


    const trackHungerIncrease = () => {
        setHungerIncreaseCount(prev => prev + 1);
        checkHealthIncrease();
    };

    const trackHappinessIncrease = () => {
        setHappinessIncreaseCount(prev => prev + 1);
        checkHealthIncrease();
    };

    // Reset the counters after health increases
    const resetCounts = () => {
        setHungerIncreaseCount(prev => prev * 0);
        setHappinessIncreaseCount(prev => prev * 0);
    }

    // Check if health should increase
    const checkHealthIncrease = () => {
        if (hungerIncreaseCount + happinessIncreaseCount == 1) {
            resetCounts();
            isCared();
            increaseSizeHP();
        }
    };


    useEffect(() => {
        const timedEvent = setTimeout(() => {isNeglected()}, 2000) //this is 2 seconds

        setTimer(timedEvent);
        return () => clearTimeout(timedEvent)
    },[isHealthyValue])
    
    // uncomment after connected to DB
    // useEffect(() => {
    //     const sendData = setInterval(() => {
    //         sendValues()
    //     }, 5000) //this is 5 seconds

    //     return () => clearInterval(sendData)
    // },[isHealthyValue])

    return {isHealthyValue, trackHungerIncrease, trackHappinessIncrease, checkHealthIncrease}
}

