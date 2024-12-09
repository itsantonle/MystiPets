import { useQuery } from "@tanstack/react-query";
import { getPenalties } from "../api/penaltyapi";
import Penalty from "../../types/Penalty";

export const usePenalties = (player_uuid: string) => {
  return useQuery<Penalty[], Error>({
    queryKey: ["penalties", player_uuid],
    queryFn: () => getPenalties(player_uuid),
  });
};