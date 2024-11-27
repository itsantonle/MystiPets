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
  return Math.min(currentVal - decrement, maxVal)
}

// (use this to use the functions in another file)
//   import HappinessManager from './file-loc';
//   HappinessManager.manageHappiness();

// change the name of this UTIL file / -name VAGUE
