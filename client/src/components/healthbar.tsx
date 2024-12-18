import healhBarImg from "./img/icons/health-bar1-2t.png"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  useDeletePet,
  useUpdateDeath,
  useUpdateHealth,
} from "../services/mutations/petmutations"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"
import {
  useAssignPenalty,
  useDeletePlayerPenalty,
} from "../services/mutations/penaltymutations"
import { useQueryClient } from "@tanstack/react-query"

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
  const applyPenalty = useAssignPenalty()
  const deletePet = useDeletePet()
  const updateStatus = useUpdateDeath()
  const queryClient = useQueryClient()
  const deleteUserPenalty = useDeletePlayerPenalty()

  // This section is for the automated Decrease HP ------------------------
  // every 5 minus health  17 minus width
  useEffect(() => {
    if (
      pet!.hunger_status! <= 30 &&
      pet!.happiness_status! <= 30 &&
      healthBarWidth > 0
    ) {
      //if health is lessthan or equal to 30, start this
      const interval = setInterval(() => {
        if (healthBarWidth > 0) {
          updateHealthMutation.mutateAsync({
            player_uuid: user!.id,
            health: pet!.health! <= 0 ? 0 : pet!.health! - 5,
          })
        }
        setHealthBarWidth(
          healthBarWidth <= 0 ? 0 : healthBarWidth - 17,
        )
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [updateHealthMutation])

  useEffect(() => {
    if (pet.health == 0) {
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
                player_penalty: 1,
              },
              {
                onSuccess: () => {
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

  //   console.log(`pethealth: ${pet!.health} barwidth: ${healthBarWidth}`)   //

  // automated Decrease Hp up to here ------------------------

  // This section is for the automated Increase HP ===============================
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
            health: pet.health! > 100 ? 100 : pet.health! + 5,
          })
        }
        setHealthBarWidth(
          healthBarWidth >= 340 ? 340 : healthBarWidth + 17,
        )
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [updateHealthMutation])
  // automated Increase HP ends here ==========================
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
