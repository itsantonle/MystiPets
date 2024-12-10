import { useQuery } from "@tanstack/react-query"
import { getUserPet } from "../api/petapi"
import { Pet } from "../../types/Pet"

export const usePets = (player_uuid: string) => {
  return useQuery<Pet[], Error>({
    queryKey: ["pets", player_uuid],
    queryFn: () => getUserPet(player_uuid),
  })
}
