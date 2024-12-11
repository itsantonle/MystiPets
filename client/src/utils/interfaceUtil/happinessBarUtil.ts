

export const isPlaying = (DBhappval: number) => {
  return DBhappval + 5 // increase
  // run mutation hook at an interval on the interactive panel component
  // only run mutation hook onclick - use the tanstack is pending well
}

export const notPlaying = (DBhappyval: number) => {
  return DBhappyval - 5
  // run mutation hook the refresh at intervals
  // mix useState hook with update hook to run at intervals
}