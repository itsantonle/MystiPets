import { useQuery } from "@tanstack/react-query"
import { getMood } from "../api/moodapi"
import Mood from "../../types/Mood"

export const useMood = (mood_id: number) => {
  return useQuery<Mood[], Error>({
    queryKey: ["moods"],
    queryFn: () => getMood(mood_id),
  })
}
