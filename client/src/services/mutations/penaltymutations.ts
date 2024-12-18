import {
  // QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import Penalty from "../../types/Penalty"
import {
  createPenalty,
  assignPenalty,
  updatePenaltyType,
  updatePenaltyDuration,
  updatePenaltyDescription,
  deletePlayerPenalty,
  deletePenalty,
} from "../api/penaltyapi"

export const useCreatePenalty = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Penalty) => createPenalty(data),

    onMutate: () => {
      console.log("mutate")
    },
    onError: () => {
      console.log("error")
    },
    onSuccess: () => {
      console.log("success")
    },

    onSettled: async (_, error) => {
      console.log("settled")
      error
        ? console.log(error)
        : await queryClient.invalidateQueries({
            queryKey: ["penalties"],
          })
    },
  })
}

export const useAssignPenalty = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      player_uuid,
      player_penalty,
    }: {
      player_uuid: string
      player_penalty: number
    }) => assignPenalty(player_uuid, player_penalty),
    onSuccess: () => {
      console.log("applying penalty")
    },

    onSettled: async (_, error) => {
      error
        ? console.error("Error assigning penalty:", error)
        : await queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })
}

export const useUpdatePenaltyType = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      penalty_id,
      penalty_type,
    }: {
      penalty_id: number
      penalty_type: string
    }) => updatePenaltyType(penalty_id, penalty_type),

    onSettled: async (_, error) => {
      error
        ? console.error("Error updating penalty type:", error)
        : await queryClient.invalidateQueries({
            queryKey: ["penalties"],
          })
    },
  })
}

export const useUpdatePenaltyDuration = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      penalty_id,
      penalty_duration,
    }: {
      penalty_id: number
      penalty_duration: number
    }) => updatePenaltyDuration(penalty_id, penalty_duration),

    onSettled: async (_, error) => {
      error
        ? console.error("Error updating penalty duration:", error)
        : await queryClient.invalidateQueries({
            queryKey: ["penalties"],
          })
    },
  })
}

export const useUpdatePenaltyDescription = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      penalty_id,
      penalty_description,
    }: {
      penalty_id: number
      penalty_description: string
    }) => updatePenaltyDescription(penalty_id, penalty_description),

    onSettled: async (_, error) => {
      error
        ? console.error("Error updating penalty description:", error)
        : await queryClient.invalidateQueries({
            queryKey: ["penalties"],
          })
    },
  })
}

export const useDeletePlayerPenalty = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (player_uuid: string) =>
      deletePlayerPenalty(player_uuid),

    onSuccess: () => {
      console.log("Successfully deleted player penalty.")
    },

    onSettled: async (_, error) => {
      error
        ? console.error("Error deleting player penalty:", error)
        : await queryClient.invalidateQueries({
            queryKey: ["penalties", "users"],
          })
    },
  })
}

export const useDeletePenalty = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (penalty_id: number) => deletePenalty(penalty_id),

    onSuccess: () => {
      console.log("Successfully deleted penalty.")
    },

    onSettled: async (_, error) => {
      error
        ? console.error("Error deleting penalty:", error)
        : await queryClient.invalidateQueries({
            queryKey: ["penalties"],
          })
    },
  })
}
