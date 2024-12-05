import { useQuery } from "@tanstack/react-query"
import { getUserPet } from "../services/petapi"
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
    return useQuery<Pet[], Error>({
        queryKey: ["pets", userID],
        queryFn: () => getUserPet(userID)
    })
}
