import { useQuery } from "@tanstack/react-query"
import { getUserPetID } from "../services/petapi"
import Pet from "../types/Pet"
// import { getData } from "./api"

// always takes a promise
// export const UseData = () => {
//   return useQuery({
//     queryKey: ["data"],
//     queryFn: getData,
//   })
// }

export const usePets = (userID: string) => {
    return useQuery<Pet[] | undefined, Error>({
        queryKey: ["pets", userID],
        queryFn: () => getUserPetID(userID)
    })
}
