import {
  // QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
// import Mood from "../../types/Mood"
import {
  //   updateMoodType,
  //   updateMoodCondition,
  //   createMood,
  //   updatePetMood,
  setToDefaultMood,
  //   deleteMood
} from "../api/moodapi"

export const useSetToDefaultMood = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ player_uuid }: { player_uuid: string }) =>
      setToDefaultMood(player_uuid),

    onSettled: async (_, error, { player_uuid }) => {
      error
        ? console.error(
            "Error setting to default pet mood of happy (mood_id: 3):",
            error,
          )
        : await queryClient.invalidateQueries({
            queryKey: ["moods", player_uuid],
          })
    },
  })
}
