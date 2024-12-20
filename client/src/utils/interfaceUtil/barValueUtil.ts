export const increaseVal = (
  currentVal: number,
  increment: number = 5,
  maxVal: number = 100,
): number => {
  return Math.min(currentVal + increment, maxVal) // Ensure it doesn't exceed maxVal
}

export const decreaseVal = (
  currentVal: number,
  decrement: number = 5,
  maxVal: number = 100,
): number => {
  const newVal = currentVal - decrement
  return Math.max(0, Math.min(newVal, maxVal))
}

export const timerValue = 5000 // 5 secs
export const maxWidth = Math.min(0, 340)
