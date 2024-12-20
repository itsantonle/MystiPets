//utils
import feedButton from "../components/img/icons/feedButton.png"
import "./styles/InteractivePanel.scss"
import { isEating } from "../utils/interfaceUtil/hungerBarUtil"

//mutation
import { useUpdateHunger } from "../services/mutations/petmutations"

//Query
import { usePets } from "../services/queries/petQueries"

//Auth
import { useAuth } from "../context/AuthContext"

export const EatingButton = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]

  const updateHungerMutation = useUpdateHunger()
  const eatingButtonClicked = () => {
    console.log("eating button clicked")
    if (pet.hunger_status! <= 95) {
      const hungerParam = {
        player_uuid: user!.id,
        hunger_status: isEating(pet.hunger_status!),
      }
      updateHungerMutation.mutate(hungerParam)
    }
  }

  return (
    
    <button
      type="button"
      onClick={eatingButtonClicked}
      disabled={updateHungerMutation.isPending}
      className="interactive-panel__action-button"
    >
      <img src={feedButton} className="img-fluid w-100" />
    </button>
  )
}

export default EatingButton
