import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink";
import { useState, useEffect } from "react";
import {increaseSizeHP, decreaseSizeHP} from "../../components/healthbar";





export const manageHealth = (DBhealthVal: number) => {
    const [utilHealthyVal, setUtilHealthyVal] =  useState(DBhealthVal);


    const isCared = () => setUtilHealthyVal(prevValue => increaseVal(prevValue))
    const isNeglected = () => setUtilHealthyVal(prevValue => decreaseVal(prevValue))

    const [increaseCount, setIncreaseCount] = useState(1);
    const [decreaseCount, setDecreaseCount] = useState(1);

    const trackIncrease = () => {
        setIncreaseCount(prev => prev + 1);
        checkHealthIncrease();
    };

    const trackDecrease = () => {
        setDecreaseCount(prev => prev + 1);
        checkHealthDecrease();
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
        }
    };

    const checkHealthDecrease = () => {
        if (decreaseCount == 2) {
            isNeglected();
            decreaseSizeHP();
            resetDecreaseCounts();
        }
    };

    return {utilHealthyVal, trackIncrease, checkHealthIncrease,
    trackDecrease, checkHealthDecrease}
}
