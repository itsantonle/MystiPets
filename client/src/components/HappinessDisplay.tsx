// automate happiness to decrease every 5 seconds

import "bootstrap/dist/css/bootstrap.min.css"
import {
  useUpdateHappiness,
  useUpdatePetMood,
} from "../services/mutations/petmutations"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import happyStar from "../components/img/icons/happy_star.png"

export const HappinessDisplay = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  const updateHappinessMutation = useUpdateHappiness()
  const updateMoodMutation = useUpdatePetMood()

  useEffect(() => {
    if (pet.happiness_status! > 0 && pet.happiness_status! <= 100) {
      const interval = setInterval(() => {
        updateHappinessMutation.mutateAsync({
          player_uuid: user!.id,
          happiness_status:
            pet.happiness_status! <= 0
              ? 0
              : pet.happiness_status! - 5,
        })

        // ====== AMO NI I PASTE
      }, 4000) //4 seconds

      return () => clearInterval(interval)
    }
  }, [updateHappinessMutation, updateMoodMutation])

  // CREATE new USEEFFECT

  return (
    <div className="counter-style">
      <img src={happyStar} className="img-fluid" />
      {pet.happiness_status}
    </div>
  )
}
