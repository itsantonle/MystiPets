export const increaseVal = (currentVal: number, increment: number = 5, maxVal: number = 50): number => {
    return Math.min(currentVal + increment, maxVal); // Ensure it doesn't exceed maxVal
  };
  
export const updateVal = (currentVal: number, maxVal: number): void => {
    const value = document.getElementById("value-meter") as HTMLElement;
    if (!value) {
      console.error("element not found!");
      return;
    }
    const percentage = (currentVal / maxVal) * 100;
    value.style.width = `${percentage}%`; 
  };
  
export const manageHappiness = () => {
    let currentVal = 25;
    const maxVal = 50;

    currentVal = increaseVal(currentVal, 5, maxVal);
    updateVal(currentVal, maxVal);
    return currentVal;
    };

  
export default {
    increaseVal,
    updateVal,
    manageHappiness,
    }
  

// (use this to use the functions in another file)
//   import HappinessManager from './file-loc'; 
//   HappinessManager.manageHappiness();
  