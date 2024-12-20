export const returnPenaltyId = (type: "dead" | "run away") => {
  switch (type) {
    case "dead":
      return 1
    case "run away":
      return 2
    default:
      console.error("inalid penalid id")
  }
}
