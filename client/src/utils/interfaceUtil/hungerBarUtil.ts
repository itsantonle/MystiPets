export const isEating = (DBhungerval: number) => {
  return DBhungerval + 5
}

export const isNotEating = (DBhungerval: number) => {
  return DBhungerval - 5
}

export const automaticHungerDecrease = (
  DBhungerval: number,
  decrement: number = 5,
) => {
  if (DBhungerval <= 0) return 0
  else return DBhungerval - decrement
}
