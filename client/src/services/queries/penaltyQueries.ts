import { useQuery } from "@tanstack/react-query"
import { getPenalties, getUserPenalties } from "../api/penaltyapi"
import Penalty from "../../types/Penalty"

export type PlayerPenalty = {
  player_penalty: number
}
export const useGetUserPenalties = (player_uuid: string) => {
  return useQuery<PlayerPenalty>({
    queryKey: ["penalties", player_uuid],
    queryFn: () => getUserPenalties(player_uuid),
  })
}

export const useGetPenalty = (penalty_id: Number) => {
  return useQuery<Penalty, Error>({
    queryKey: ["penalties", penalty_id],
    queryFn: () => getPenalties(penalty_id),
    enabled: !!penalty_id,
  })
}
