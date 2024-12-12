import { useAuth } from "../context/AuthContext"
// import { useMoods } from "../services/queries/moodQueries"
import { usePets } from "../services/queries/petQueries"

export const MoodDisplay = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  //   const mood = useMoods(pet.mood_id).data!

  return (
    <>
      <textarea
        className="mood-style"
        placeholder="Mood"
        value={"japp"}
        readOnly
      ></textarea>
    </>
  )
}
