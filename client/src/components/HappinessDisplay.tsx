// stylesheets
import "bootstrap/dist/css/bootstrap.min.css"
// mutation hooks
import {
  useUpdateHappiness,
  useUpdateHealth,
  useUpdateLeaving,
  useUpdatePetMood,
} from "../services/mutations/petmutations"
import {
  useAssignPenalty,
  useDeletePlayerPenalty,
} from "../services/mutations/penaltymutations"
//query hooks
import { usePets } from "../services/queries/petQueries"
import { useGetLoggedinUser } from "../services/queries/userQueries"
// auth context
import { useAuth } from "../context/AuthContext"
// react hooks
import { useEffect, useState } from "react"
// util
import happyStar from "../components/img/icons/happy_star.png"
import {
  automaticHappinessDecrease,
  setMood,
} from "../utils/interfaceUtil/happinessBarUtil"
import { returnPenaltyId } from "../utils/interfaceUtil/penaltyUtil"
import { toast } from "react-toastify"

export const HappinessDisplay = () => {
  // auth
  const { user } = useAuth()
  //  tanstack hooks
  const pet = usePets(user!.id).data![0]
  const updateHealthMutation = useUpdateHealth()
  const updateHappinessMutation = useUpdateHappiness()
  const updateMoodMutation = useUpdatePetMood()
  const getUserQuery = useGetLoggedinUser(user!.id!)
  const applyPenalty = useAssignPenalty()
  const updateLeavingStatus = useUpdateLeaving()
  const deleteUserPenalty = useDeletePlayerPenalty()

  //  useState hooks
  const [returned, setReturned] = useState(1)
  const [runningaway, SetRunningAway] = useState(0)

  const spacer = ":‎ ‎" //:U+200E is an invisible character

  useEffect(() => {
    if (pet.happiness_status! > -5 && pet.happiness_status! <= 100) {
      if (
        !updateHappinessMutation.isPending ||
        !updateMoodMutation.isPending ||
        !getUserQuery.isPending ||
        !updateHealthMutation.isPending ||
        !pet.has_left ||
        !pet.is_dead
      ) {
        const interval = setInterval(() => {
          updateMoodMutation.mutate({
            player_uuid: user!.id!,
            mood_id: setMood(pet!.happiness_status!)!,
          })

          updateHappinessMutation.mutateAsync({
            player_uuid: user!.id,
            happiness_status: automaticHappinessDecrease(
              pet!.happiness_status!,
              5,
            )!,
          })
        }, 3000) // run every 3 seconds

        return () => clearInterval(interval)
      }
    }
  }, [updateHappinessMutation])

  useEffect(() => {
    if (
      pet.happiness_status === 0 &&
      !pet.has_left &&
      runningaway == 0 &&
      !updateHappinessMutation.isPending &&
      !updateMoodMutation.isPending
    ) {
      // apply penalty to user
      applyPenalty.mutate(
        {
          player_uuid: user!.id,
          player_penalty: returnPenaltyId("run away")!,
        },
        { onSuccess: () => toast("Your pet has left") },
      )

      // update pet has_left boolean
      updateLeavingStatus.mutate({
        player_uuid: user!.id,
        has_left: true,
      })

      // update the happiness mutation to increaase by 20
      updateHappinessMutation.mutate({
        player_uuid: user!.id!,
        happiness_status: 20,
      })

      SetRunningAway(1)
      setReturned(0)
    }
    if (
      pet.has_left! &&
      returned == 0 &&
      !updateHappinessMutation.isPending &&
      !updateMoodMutation.isPending
    ) {
      setTimeout(() => {
        updateLeavingStatus.mutate({
          player_uuid: user!.id,
          has_left: false,
        })
        deleteUserPenalty.mutate(user!.id!, {
          onSuccess: () => {
            toast("your pet has returned!")
          },
        })
      }, 5000) // runs after 5 seconds

      // update useState variables
      setReturned(1)
      SetRunningAway(0)
    }
  }, [updateHappinessMutation])

  return (
    <div className="counter-style">
      <img src={happyStar} className="img-fluid" />
      {spacer}
      {pet.happiness_status}
    </div>
  )
}
