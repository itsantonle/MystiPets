import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import Pet from "../types/Pet"
import { createPet } from "./api/petapi"


export const useCreatePet = () => {
  return useMutation({
    mutationFn: (data: Pet) => createPet(data),

    onMutate: () => {console.log("mutate")},
    onError: () => {console.log("error")},
    onSuccess: () => {console.log("success")},

    onSettled: async (_, error) => {
      (console.log("settled"))
      return (error ? console.log(error) : 
      await useQueryClient()
      .invalidateQueries({ queryKey: ["pets"]}))
    }
  })
}

