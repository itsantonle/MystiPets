import React, {useEffect, useState} from "react"
import { manageHealth } from "../utils/interfaceUtil/healthBarUtil";
import healhBarImg from "./img/icons/health-bar1-2t.png"
import 'bootstrap/dist/css/bootstrap.min.css'

const AnimatedHealthBar: React.FC = () => {
    const {isHealthyValue} = manageHealth()
    const health = 340
    const [healthBar, sethealthBar] = useState(health)

    useEffect(() => {
        // delete if health function is implemented
        const resizeInterval = setInterval(() => {
          sethealthBar((prevWidth) => {
            const newWidth = prevWidth > 0 ? prevWidth - 17 : 0;
            console.log("This is shrinking", newWidth);
            return newWidth;
          });
        }, 2000); // Shrink the health bar every 5s
    
        return () => clearInterval(resizeInterval); // Cleanup on component unmount
      }, []);
    
    return (
        <div className="health-bar-container" style={{width: `${healthBar}px`}}>
            <div className="health-bar-wrapper">
                <img src={healhBarImg} className="health-bar-img"/>
            </div>
        </div>
    )
}
export default AnimatedHealthBar