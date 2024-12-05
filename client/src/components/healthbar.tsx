import React, {useEffect, useState} from "react"
import { manageHealth } from "../utils/interfaceUtil/healthBarUtil";
import healhBarImg from "./img/icons/health-bar1-2t.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {timerValue, maxWidth} from "../utils/interfaceUtil/barValueUtil"
// const {isHealthyValue} = manageHealth();
// import {isHappyValue} from "../utils/interfaceUtil/happinessBarUtil";
// import {isHungryValue} from "../utils/interfaceUtil/hungerBarUtil";

let healthBarWidth = 340

const maxHealth = 340
const minHealth = 0


export const increaseSizeHP = () => {
  if (healthBarWidth >= maxHealth) {
    console.log(`Health is already at maximum (${healthBarWidth}).`);
    return healthBarWidth
  }
  return Math.min(healthBarWidth = healthBarWidth + 17, maxHealth)
}


export const AnimatedHealthBar: React.FC = () => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const decreaseSizeHP = () => {
      return Math.max(healthBarWidth = healthBarWidth - 17, minHealth)
    }

    useEffect(() => {
      const timedEvent = setTimeout(() => {decreaseSizeHP()}, timerValue) //this is 2 seconds
      setTimer(timedEvent);
      return () => clearTimeout(timedEvent)
    },[healthBarWidth])
    
    return (
        <div className="health-bar-container" style={{width: `${healthBarWidth}px`}}>
            <div className="health-bar-wrapper">
                <img src = {healhBarImg} className="health-bar-img"/>
            </div>
        </div>
    )
}



        // delete if health function is implemented
        // const resizeInterval = setInterval(() => {
        //   sethealthBar((prevWidth) => {
        //     const newWidth = prevWidth > 0 ? prevWidth - 17 : 0;
        //     console.log("This is shrinking", newWidth);
        //     return newWidth;
        //   });
        // }, 2000); // Shrink the health bar every 5s