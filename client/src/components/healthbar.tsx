import { manageHealth } from "../utils/interfaceUtil/healthBarUtil"
import healhBarImg from "./img/icons/health-bar1-2t.png"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  timerValue,
  maxWidth,
} from "../utils/interfaceUtil/barValueUtil"
// const {isHealthyValue} = manageHealth();
import { manageHappiness } from "../utils/interfaceUtil/happinessBarUtil"
import { manageHunger } from "../utils/interfaceUtil/hungerBarUtil"

let healthBarWidth = 340

const maxHealth = 340
const minHealth = 0
let happyVal = 80 //should be fetched directly from Db
let hungryVal = 30 //should be fetched directly from Db


//Fetch happiness here
//Fetch hunger here

export const increaseSizeHP = () => {
  if (healthBarWidth >= maxHealth) {
    console.log(`Health is already at maximum (${healthBarWidth}).`)
    return healthBarWidth
  }
  return Math.min((healthBarWidth = healthBarWidth + 17), maxHealth)
}

export const decreaseSizeHP = () => { 
  console.log(`Health is at (${healthBarWidth}).Deduction: 17px`)
  return Math.max((healthBarWidth = healthBarWidth - 17), minHealth) //after happiness 50 or 50 hunger
}

export const AnimatedHealthBar: React.FC = () => {
  return (
    <div
      className="health-bar-container"
      style={{ width: `${healthBarWidth}px` }}
    >
      <div className="health-bar-wrapper">
        <img src={healhBarImg} className="health-bar-img" />
      </div>
    </div>
  )
}

//full width of health bar= 340px
//health bar has 20 segments, each segment = 17px
