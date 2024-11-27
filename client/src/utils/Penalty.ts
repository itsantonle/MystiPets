import { increaseVal, updateVal } from './FeedAndPlay'

let current = 25
const maxVal = 50;

// Store the last run timestamp
let lastRunTimestamp: number = Date.now();

// Function to apply a penalty if 2 hours have passed
const applyPenalty = () => {
  const now = Date.now();
  const timeElapsed = now - lastRunTimestamp; // Time in milliseconds

  // Check if 2 hours (7200000 ms) have passed
  if (timeElapsed >= 2 * 60 * 60 * 1000) {
    current = Math.max(current - 10, 0); // Decrease by 10, ensure it doesn't go below 0
    updateVal(current, maxVal);// Update the happy bar visually
    console.log(`Penalty applied. Current Value: ${current}`);
    lastRunTimestamp = now;// Reset the timestamp after applying the penalty
  }
};

// Function to simulate an activity that resets the timer and updates value
const performActivity = () => {
  current = increaseVal(current, 5, maxVal); // Increase value by 5
  updateVal(current, maxVal);// Update the happy bar visually
  lastRunTimestamp = Date.now();// Reset the last run timestamp
  console.log(`Activity performed. Current value: ${current}`);
};

// Periodic penalty check every minute
setInterval(applyPenalty, 60 * 1000); // Check for penalty every 1 minute

export default {
  applyPenalty,
  performActivity,
};
