import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink";
import { useState, useEffect } from "react";
import {manageHappiness} from "../interfaceUtil/happinessBarUtil";
import {manageHunger} from "../interfaceUtil/hungerBarUtil";
import {increaseSizeHP, decreaseSizeHP} from "../../components/healthbar";


const healthValue = 100


export const manageHealth = () => {
    //const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [isHealthyValue, setisHealthyValue] =  useState(healthValue);

    // const {isHappyValue} = manageHappiness();
    // const {isHungryValue} = manageHunger();

    const isCared = () => setisHealthyValue(prevValue => increaseVal(prevValue))
    const isNeglected = () => setisHealthyValue(prevValue => decreaseVal(prevValue))

    const [hungerIncreaseCount, setHungerIncreaseCount] = useState(0);
    const [happinessIncreaseCount, setHappinessIncreaseCount] = useState(0);

    const [hungerDecreaseCount, setHungerDecreaseCount] = useState(0);
    const [happinessDecreaseCount, setHappinessDecreaseCount] = useState(0);


    const trackHungerIncrease = () => {
        setHungerIncreaseCount(prev => prev + 1);
        checkHealthIncrease();
    };

    const trackHappinessIncrease = () => {
        setHappinessIncreaseCount(prev => prev + 1);
        checkHealthIncrease();
    };

    const trackHungerDecrease = () => {
        setHungerDecreaseCount(prev => prev + 1);
        checkHealthDecrease();
    };

    const trackHappinessDecrease = () => {
        setHappinessDecreaseCount(prev => prev + 1);
        checkHealthDecrease();
    };

    // Reset the counters after health increases
    const resetIncreaseCounts = () => {
        setHungerIncreaseCount(0);
        setHappinessIncreaseCount(0);
    }

    const resetDecreaseCounts = () => {
        setHungerDecreaseCount(0);
        setHappinessDecreaseCount(0);
    }

    // Check if health should increase
    const checkHealthIncrease = () => {
        if (hungerIncreaseCount + happinessIncreaseCount == 1 || hungerIncreaseCount == 1 || happinessIncreaseCount == 1) {
            resetIncreaseCounts();
            isCared();
            increaseSizeHP();
            console.log('increase', happinessIncreaseCount, hungerIncreaseCount)
        }
    };

    const checkHealthDecrease = () => {
        if (hungerDecreaseCount + happinessDecreaseCount == 1 || hungerDecreaseCount == 1 || happinessDecreaseCount == 1) {
            resetDecreaseCounts();
            isNeglected();
            decreaseSizeHP();
            console.log('decrease', happinessDecreaseCount, hungerDecreaseCount)
        }
    };


    // useEffect(() => {
    //     const timedEvent = setTimeout(() => {isNeglected()}, 2000) //this is 2 seconds

    //     setTimer(timedEvent);
    //     return () => clearTimeout(timedEvent)
    // },[isHealthyValue])
    
    // uncomment after connected to DB
    // useEffect(() => {
    //     const sendData = setInterval(() => {
    //         sendValues()
    //     }, 5000) //this is 5 seconds

    //     return () => clearInterval(sendData)
    // },[isHealthyValue])

    return {isHealthyValue, trackHungerIncrease, trackHappinessIncrease, checkHealthIncrease,
    trackHungerDecrease, trackHappinessDecrease, checkHealthDecrease}
}
