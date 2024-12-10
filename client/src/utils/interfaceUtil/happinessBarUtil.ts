import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink"
import { useState, useEffect } from "react"
import { manageHealth } from "../interfaceUtil/healthBarUtil"
import { timerValue } from "./barValueUtil"

// delete manage happiness

export const isPlaying = (DBhappval: number) => {
  return DBhappval + 10 // increase
  // run mutation hook at an interval on the interactive panel component
  // only run mutation hook onclick - use the tanstack is pending well
}

export const notPlaying = (DBhappyval: number) => {
  return DBhappyval - 10
  // run mutation hook the refresh at intervals
  // mix useState hook with update hook to run at intervals
}

export const manageHappiness = (DBhappyVal: number) => {
  const { trackDecrease } = manageHealth(100) /// bruh what is this? no need to track decrease since we're getting from db

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const [utilHappyVal, setUtilHappyVal] = useState(DBhappyVal)

  const isPlaying = () =>
    setUtilHappyVal((prevValue) => increaseVal(prevValue))
  const isSad = () =>
    setUtilHappyVal((prevValue) => decreaseVal(prevValue))

  const isPlayingClicked = () => {
    //<- triggered by play button
    isPlaying()
    return utilHappyVal
  }

  // useEffect for timer
  useEffect(() => {
    const timedEvent = setTimeout(() => {
      isSad(), trackDecrease()
    }, 6000) //this is 2 seconds

    setTimer(timedEvent)
    return () => clearTimeout(timedEvent)
  }, [utilHappyVal])
}
