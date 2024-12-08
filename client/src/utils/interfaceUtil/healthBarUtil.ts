import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink";
import { useState, useEffect } from "react";
import {increaseSizeHP, decreaseSizeHP} from "../../components/healthbar";


const healthValue = 100


export const manageHealth = () => {
    const [isHealthyValue, setisHealthyValue] =  useState(healthValue);


    const isCared = () => setisHealthyValue(prevValue => increaseVal(prevValue))
    const isNeglected = () => setisHealthyValue(prevValue => decreaseVal(prevValue))

    const [increaseCount, setIncreaseCount] = useState(1);
    const [decreaseCount, setDecreaseCount] = useState(1);

    const trackIncrease = () => {
        setIncreaseCount(prev => prev + 1);
        checkHealthIncrease();
        console.log('increase', increaseCount)
    };

    const trackDecrease = () => {
        setDecreaseCount(prev => prev + 1);
        checkHealthDecrease();
        console.log('decrease', decreaseCount)
    };

    const resetIncreaseCounts = () => {
        setIncreaseCount(1);
    }

    const resetDecreaseCounts = () => {
        setDecreaseCount(1);
    }

    const checkHealthIncrease = () => {
        if (increaseCount == 2) {
            resetDecreaseCounts();
            resetIncreaseCounts();
            isCared();
            increaseSizeHP();
            // console.log('increase', happinessIncreaseCount, hungerIncreaseCount)
        }
    };

    const checkHealthDecrease = () => {
        if (decreaseCount == 2) {
            isNeglected();
            decreaseSizeHP();
            resetDecreaseCounts();
            // console.log('decrease', happinessDecreaseCount, hungerDecreaseCount)
        }
    };
    
    // uncomment after connected to DB
    // useEffect(() => {
    //     const sendData = setInterval(() => {
    //         sendValues()
    //     }, 5000) //this is 5 seconds

    //     return () => clearInterval(sendData)
    // },[isHealthyValue])

    return {isHealthyValue, trackIncrease, checkHealthIncrease,
    trackDecrease, checkHealthDecrease}
}
