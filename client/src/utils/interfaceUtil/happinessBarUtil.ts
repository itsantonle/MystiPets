export const isPlaying = (DBhappval: number) => {
  return DBhappval + 5 // increase when playing
}

export const notPlaying = (DBhappyval: number) => {
  return DBhappyval - 5
}

export const setMood = (DBHappyval: number) => {
  // return mood id depending on the DBHappyval

  if (DBHappyval > 20 && DBHappyval < 50) {
    return 2 // sad
  }
  if (DBHappyval > 0 && DBHappyval <= 20) {
    return 1 // angry
  }

  if (DBHappyval >= 50) {
    return 3 // happy
  }
}

// decrease happiness bar value

export const automaticHappinessDecrease = (
  DBHappyval: number,
  decrement: number,
) => {
  // return the number of decrease depending on the DB happiness value
  if (DBHappyval <= 0) return 0
  else return DBHappyval - decrement
}
