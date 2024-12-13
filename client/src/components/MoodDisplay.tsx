import { useAuth } from "../context/AuthContext"
import { usePets } from "../services/queries/petQueries"
import logsmall from "/assets/logsmall.png"
import "./styles/MoodDisplay.scss"

export const MoodDisplay = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]

  return (
    <div className="mood-display">
      <img 
        src={logsmall} 
        alt="mood background" 
        className="mood-display__background"
      />
      <textarea
        className="mood-display__text"
        placeholder="Mood"
        value={pet.mood_status}
        readOnly
      />
    </div>
  )
}
