import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useMood } from "../services/queries/moodQueries"
import { usePets } from "../services/queries/petQueries"

export const MoodDisplay = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  const DatabaseMood = useMood(pet!.mood_id!)
  return (
    <>
      <textarea
        className="mood-style"
        placeholder="Mood"
        value={
          DatabaseMood.isPending
            ? "Loading"
            : DatabaseMood.isError
              ? "Error Loading Data"
              : `${DatabaseMood!.data?.mood_type.toUpperCase()} - ${DatabaseMood!.data!.mood_condition}`
        }
        readOnly
      ></textarea>
    </>
  )
}
