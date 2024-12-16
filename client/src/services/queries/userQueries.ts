import { useQuery } from "@tanstack/react-query"
import { getLoggedInUser } from "../api/api"
import { Player } from "../../types/Player"

export const useGetLoggedinUser = (player_uuid: string) => {
  return useQuery<Player>({
    queryKey: ["users", player_uuid],
    queryFn: () => getLoggedInUser(player_uuid),
  })
}
