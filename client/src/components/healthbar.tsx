import healhBarImg from "./img/icons/health-bar1-2t.png"
import "bootstrap/dist/css/bootstrap.min.css"
// singleton queryClient instance
import { useQueryClient } from "@tanstack/react-query"
// mutations
import {
  useDeletePet,
  useUpdateDeath,
  useUpdateHealth,
} from "../services/mutations/petmutations"
import {
  useAssignPenalty,
  useDeletePlayerPenalty,
} from "../services/mutations/penaltymutations"
//  queries
import { usePets } from "../services/queries/petQueries"
// auth context
import { useAuth } from "../context/AuthContext"
// react hooks
import { useEffect, useState } from "react"
import {
  automaticHealthBarDecrease,
  automaticHealthBarIncrease,
  automaticHealthDecrease,
  automaticHealthIncrease,
} from "../utils/interfaceUtil/healthBarUtil"
import { returnPenaltyId } from "../utils/interfaceUtil/penaltyUtil"
import { toast } from "react-toastify"

//  health bar to img health bar ratio
// 3.4 barwidth : 1 HP

export const AnimatedHealthBar = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  const currentBarWidth = pet.health! <= 0 ? 0 : pet.health! * 3.4
  const updateHealthMutation = useUpdateHealth()
  const [healthBarWidth, setHealthBarWidth] =
    useState(currentBarWidth)
  const applyPenalty = useAssignPenalty()
  const deletePet = useDeletePet()
  const updateStatus = useUpdateDeath()
  const queryClient = useQueryClient()
  const deleteUserPenalty = useDeletePlayerPenalty()

  //=======   automatic health decay over time interval
  useEffect(() => {
    if (
      pet!.hunger_status! <= 30 &&
      pet!.happiness_status! <= 30 &&
      healthBarWidth > 0
    ) {
      //if health is lessthan or equal to 30 start the health decrease
      const interval = setInterval(() => {
        if (healthBarWidth > 0) {
          updateHealthMutation.mutateAsync({
            player_uuid: user!.id,
            health: automaticHealthDecrease(pet.health!, 5),
          })
        }
        setHealthBarWidth(automaticHealthBarDecrease(healthBarWidth))
      }, 3000) // runs every 3 seconds

      return () => clearInterval(interval)
    }
  }, [updateHealthMutation])

  // =======  handles the death of the pet
  useEffect(() => {
    if (pet.health == 0) {
      // update pet is_dead boolean
      updateStatus.mutate(
        {
          player_uuid: user!.id,
          is_dead: true,
        },
        {
          onSuccess: () => {
            console.log("success dead")
            applyPenalty.mutate(
              {
                player_uuid: user!.id,
                player_penalty: returnPenaltyId("dead")!,
              },
              {
                // delete user
                onSuccess: () => {
                  toast("Your pet has died!")
                  setTimeout(() => {
                    deletePet.mutate(user!.id, {
                      onSuccess: () => {
                        queryClient.invalidateQueries({
                          queryKey: ["pets", user!.id],
                        })
                        deleteUserPenalty.mutate(user!.id!)
                      },
                    })
                    console.log("deads")
                  }, 5000)
                },
                onError: (error) => console.log(error),
              },
            )
            console.log(`running apply`)
          },
          onError: (error) => console.log(error),
        },
      )
      console.log(`running update`)
    }
  }, [pet.health, pet.is_dead])

  //=======   automated increase of hp
  useEffect(() => {
    if (
      pet.hunger_status == 100 &&
      pet.happiness_status == 100 &&
      healthBarWidth < 340
    ) {
      //only activates if both happiness and hunger is at 100
      const interval = setInterval(() => {
        if (healthBarWidth <= 340) {
          updateHealthMutation.mutateAsync({
            player_uuid: user!.id,
            health: automaticHealthIncrease(pet!.health!)!,
          })
        }
        setHealthBarWidth(automaticHealthBarIncrease(healthBarWidth))
      }, 1000)
      // runs over a span of 1 second

      return () => clearInterval(interval)
    }
  }, [updateHealthMutation])

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
