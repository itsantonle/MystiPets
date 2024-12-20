// utils
import "bootstrap/dist/css/bootstrap.min.css"
import meat from "../components/img/icons/meat.png"
// mutations
import { useUpdateHunger } from "../services/mutations/petmutations"
// queries
import { usePets } from "../services/queries/petQueries"
// auth
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { automaticHungerDecrease } from "../utils/interfaceUtil/hungerBarUtil"

export const HungerDisplay = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  const updateHungerMutation = useUpdateHunger()
  const spacer = ":‎ ‎" //:U+200E is an invisible character

  useEffect(() => {
    if (pet.hunger_status! > 0 && pet.hunger_status! <= 100) {
      const interval = setInterval(() => {
        updateHungerMutation.mutateAsync({
          player_uuid: user!.id,
          hunger_status: automaticHungerDecrease(pet!.hunger_status!),
        })
      }, 3000) //3 seconds

      return () => clearInterval(interval)
    }
  }, [updateHungerMutation])

  return (
    <div className="counter-style">
      <img src={meat} className="img-fluid" />
      {spacer}
      {pet.hunger_status}
    </div>
  )
}
