import {
  Capycorn_Angry,
  Capycorn_Dead,
  Capycorn_Idle,
  Capycorn_Sad,
  Hydra_Angry,
  Hydra_Dead,
  Hydra_Idle,
  Hydra_Sad,
} from "../../components/img/Animations"
import { setMood } from "./happinessBarUtil"

export const capycornAnimationDisplay = (
  DBhappyval: number,
  isEating: boolean = false,
  isPlaying: boolean = false,
  isDead: boolean = false,
  has_left: boolean = false,
) => {
  if (!isEating || !isPlaying || !isDead || !has_left) {
    switch (setMood(DBhappyval)!) {
      case 1:
        return Capycorn_Angry
      case 2:
        return Capycorn_Sad
      case 3:
        return Capycorn_Idle
      default:
        return Capycorn_Idle
    }
  }

  if (isDead) {
    return Capycorn_Dead
  }

  if (has_left) {

  }
}

export const hydraAnimationDisplay = (
  DBhappyval: number,
  isEating: boolean = false,
  isPlaying: boolean = false,
  isDead: boolean = false,
  has_left: boolean = false,
) => {
  if (!isEating || !isPlaying || !isDead || !has_left) {
    switch (setMood(DBhappyval)!) {
      case 1:
        return Hydra_Angry
      case 2:
        return Hydra_Sad
      case 3:
        return Hydra_Idle
      default:
        return Hydra_Idle
    }
  }

  if (isDead) {
    return Hydra_Dead
  }

  if (has_left) {

  }
}
