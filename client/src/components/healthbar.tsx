import React, {useEffect, useState} from "react"
import { manageHealth } from "../utils/interfaceUtil/healthBarUtil";
import healhBarImg from "./img/icons/health-bar1-2t.png"
import 'bootstrap/dist/css/bootstrap.min.css'

let healthBarWidth = 340

export const HPsize = () => {
  healthBarWidth = healthBarWidth + 17
}

export const AnimatedHealthBar: React.FC = () => {
        // delete if health function is implemented
        // const resizeInterval = setInterval(() => {
        //   sethealthBar((prevWidth) => {
        //     const newWidth = prevWidth > 0 ? prevWidth - 17 : 0;
        //     console.log("This is shrinking", newWidth);
        //     return newWidth;
        //   });
        // }, 2000); // Shrink the health bar every 5s
    
    return (
        <div className="health-bar-container" style={{width: `${healthBarWidth}px`}}>
            <div className="health-bar-wrapper">
                <img src = {healhBarImg} className="health-bar-img"/>
            </div>
        </div>
    )
}