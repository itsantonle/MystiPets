//utils
import playButton from "../components/img/icons/playButton.png"
import "./styles/InteractivePanel.scss"
//mutations
import {
  useUpdateHappiness,
  useUpdatePetMood,
} from "../services/mutations/petmutations"
//queries
import { isPlaying } from "../utils/interfaceUtil/happinessBarUtil"
import { usePets } from "../services/queries/petQueries"
//auth
import { useAuth } from "../context/AuthContext"

export const PlayingBtn = () => {
  const updateHappinessMutation = useUpdateHappiness()
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  const updateMoodMutation = useUpdatePetMood()

  const playingButtonClicked = () => {
    console.log("playing button clicked")
    if (pet.happiness_status! <= 95) {
      const happyParam = {
        player_uuid: user!.id,
        happiness_status: isPlaying(pet.happiness_status!),
      }
      updateHappinessMutation.mutate(happyParam)

      if (!updateMoodMutation.isPending) {
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
      }
    }
  }
  return (
      <button
        type="button"
        onClick={playingButtonClicked}
        disabled={updateHappinessMutation.isPending}
        className="interactive-panel__action-button"
      >
        <img src={playButton} className="img-fluid  w-100" />
      </button>
  )
}

export default PlayingBtn
