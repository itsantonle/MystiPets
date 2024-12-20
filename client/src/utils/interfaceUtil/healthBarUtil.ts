export const automaticHealthDecrease = (
  DBHealthvalue: number,
  decrement: number,
) => {
  if (DBHealthvalue <= 0) return 0
  else return DBHealthvalue - decrement
}

export const automaticHealthBarDecrease = (
  healthBarWidth: number,
  decrement: number = 17,
) => {
  if (healthBarWidth <= 0) return 0
  else return healthBarWidth - decrement
}

export const automaticHealthIncrease = (
  DBHealthvalue: number,
  increment: number = 5,
) => {
  if (DBHealthvalue > 100) return 100
  else return DBHealthvalue + increment
}

export const automaticHealthBarIncrease = (
  healthBarWidth: number,
  decrement: number = 17,
) => {
  if (healthBarWidth > 340) return 340
  else return healthBarWidth + decrement
}
