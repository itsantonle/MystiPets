import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink"
import { useState, useEffect } from "react"
import { manageHealth } from "../interfaceUtil/healthBarUtil"
import { timerValue } from "./barValueUtil"

export const isEating = (DBhungerval: number) => {
  return DBhungerval + 10
}

export const isNotEating = (DBhungerval: number) => {
  return DBhungerval - 10
}
//no need for manage hunger

export const manageHunger = (DBhungerVal: number) => {
  //   const { trackDecrease } = manageHealth()

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const [utilHungryVal, setUtilHungryVal] = useState(DBhungerVal)

  const petEating = () =>
    setUtilHungryVal((prevValue) => increaseVal(prevValue))
  const petHungry = () =>
    setUtilHungryVal((prevValue) => decreaseVal(prevValue))

  const isEatingClicked = () => {
    //<- triggered when food button is pressed
    petEating()
    return utilHungryVal
  }

  // useEffect for timer
  useEffect(() => {
    const timedEvent = setTimeout(() => {
      //   petHungry(), trackDecrease()
    }, 5000) //this is 60 secs

    setTimer(timedEvent)
    return () => clearTimeout(timedEvent)
  }, [utilHungryVal])
}
