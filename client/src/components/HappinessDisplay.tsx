// automate happiness to decrease every 5 seconds

import "bootstrap/dist/css/bootstrap.min.css"
import {
  useUpdateHappiness,
  useUpdateLeaving,
  useUpdatePetMood,
} from "../services/mutations/petmutations"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"
import happyStar from "../components/img/icons/happy_star.png"
import { useAssignPenalty } from "../services/mutations/penaltymutations"
import { useGetPenalty } from "../services/queries/penaltyQueries"

import { useGetLoggedinUser } from "../services/queries/userQueries"

export const HappinessDisplay = () => {
  const { user } = useAuth()

  const pet = usePets(user!.id).data![0]
  const updateHappinessMutation = useUpdateHappiness()
  const updateMoodMutation = useUpdatePetMood()
  const getUserQuery = useGetLoggedinUser(user!.id!)
  // const getPenalty = useGetPenalty(2).data
  const applyPenalty = useAssignPenalty()
  const updateLeavingStatus = useUpdateLeaving()
  const [duration, setDuration] = useState(100)
  const [ranAway, setRanAway] = useState(false)

  useEffect(() => {
    if (pet.happiness_status! > -5 && pet.happiness_status! <= 100) {
      if (
        !updateHappinessMutation.isPending ||
        !updateMoodMutation.isPending ||
        !getUserQuery.isPending
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

  useEffect(() => {
    if (pet.happiness_status === 0 && !pet.has_left && !ranAway) {
      setRanAway(true)
      applyPenalty.mutate({
        player_uuid: user!.id,
        player_penalty: 2,
      })
      updateLeavingStatus.mutate({
        player_uuid: user!.id,
        has_left: true,
      })
      updateHappinessMutation.mutate({
        player_uuid: user!.id!,
        happiness_status: 30,
      })
      console.log("ranaway")
    }
    if (pet.has_left!) {
      setTimeout(() => {
        setRanAway(false)
        updateLeavingStatus.mutate({
          player_uuid: user!.id,
          has_left: false,
        })
        console.log("pet has returned")
      }, 9000)
    }

    //   //apply mutate can set to null set type number
    // }
  }, [ranAway, updateHappinessMutation])

  return (
    <div className="counter-style">
      <img src={happyStar} className="img-fluid" />
      {pet.happiness_status}
    </div>
  )
}
