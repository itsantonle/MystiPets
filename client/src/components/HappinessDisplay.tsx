// automate happiness to decrease every 5 seconds

import "bootstrap/dist/css/bootstrap.min.css"
import {
  useUpdateHappiness,
  useUpdateLeaving,
  useUpdatePetMood,
} from "../services/mutations/petmutations"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import happyStar from "../components/img/icons/happy_star.png"
import { useAssignPenalty } from "../services/mutations/penaltymutations"

export const HappinessDisplay = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  const updateHappinessMutation = useUpdateHappiness()
  const updateMoodMutation = useUpdatePetMood()
  const applyPenalty = useAssignPenalty()
  const updateLeavingStatus = useUpdateLeaving()

  useEffect(() => {
    if (pet.happiness_status === 0 && !pet.has_left) {
      applyPenalty.mutate({
        player_uuid: user!.id,
        player_penalty: 2
      })
      updateLeavingStatus.mutate({
        player_uuid: user!.id,
        has_left: true
      })

      window.alert("YOUR PET HAS LEFT YOU")
    }
    if (pet.happiness_status! > 0 && pet.happiness_status! <= 100) {
      if (
        !updateHappinessMutation.isPending ||
        !updateMoodMutation.isPending
      ) {
        const interval = setInterval(() => {
          if (
            pet.happiness_status! > 20 &&
            pet.happiness_status! < 50
          ) {
            updateMoodMutation.mutate({
              player_uuid: user!.id!,
              mood_id: 2,
            })
          }
          if (
            pet.happiness_status! > 0 &&
            pet.happiness_status! <= 20
          ) {
            updateMoodMutation.mutate({
              player_uuid: user!.id!,
              mood_id: 1,
            })
          }
          if (pet.happiness_status! >= 50) {
            updateMoodMutation.mutate({
              player_uuid: user!.id!,
              mood_id: 3,
            })
          }
          updateHappinessMutation.mutateAsync({
            player_uuid: user!.id,
            happiness_status:
              pet.happiness_status! <= 0
                ? 0
                : pet.happiness_status! - 5,
          })
        }, 2000) //4 seconds

        return () => clearInterval(interval)
      }
    }
  }, [updateHappinessMutation])

  return (
    <div className="counter-style">
      <img src={happyStar} className="img-fluid" />
      {pet.happiness_status}
    </div>
  )
}
