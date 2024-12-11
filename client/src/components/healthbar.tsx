import healhBarImg from "./img/icons/health-bar1-2t.png"
import "bootstrap/dist/css/bootstrap.min.css"
import { useUpdateHealth } from "../services/mutations/petmutations"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"

//Fetch happiness here
//Fetch hunger here

// export const increaseSizeHP = () => {
//   if (healthBarWidth >= maxHealth) {
//     console.log(`Health is already at maximum (${healthBarWidth}).`)
//     // toasters
//     return healthBarWidth
//   }
//   return Math.min((healthBarWidth = healthBarWidth + 17), maxHealth)
// }

// export const decreaseSizeHP = () => {
//   console.log(`Health is at (${healthBarWidth}).Deduction: 17px`)
//   return Math.max((healthBarWidth = healthBarWidth - 17), minHealth) //after happiness 50 or 50 hunger
// }

// 170: 50
// 340: 100

// 3.4 barwidth : 1 HP
export const AnimatedHealthBar = () => {
  const { user } = useAuth()

  const pet = usePets(user!.id).data![0]
  const currentBarWidth = pet.health! <= 0 ? 0 : pet.health! * 3.4
  const updateHealthMutation = useUpdateHealth()
  const [healthBarWidth, setHealthBarWidth] =
    useState(currentBarWidth)

  // every 5 minus health  17 minus width
  useEffect(() => {
    const interval = setInterval(() => {
      if (healthBarWidth > 0) {
        updateHealthMutation.mutateAsync({
          player_uuid: user!.id,
          health: pet!.health! <= 0 ? 0 : pet!.health! - 5,
        })
      }
      setHealthBarWidth(healthBarWidth <= 0 ? 0 : healthBarWidth - 17)
    }, 3000)

    return () => clearInterval(interval)
  }, [updateHealthMutation])

  //   console.log(`pethealth: ${pet!.health} barwidth: ${healthBarWidth}`)   //
  return (
    <div
      className="health-bar-container"
      style={{ width: `${healthBarWidth}px` }}
    >
      <div className="health-bar-wrapper">
        <img src={healhBarImg} className="health-bar-img" />
      </div>
    </div>
  )
}

//full width of health bar= 340px
//health bar has 20 segments, each segment = 17px
