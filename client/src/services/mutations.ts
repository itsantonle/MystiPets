import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import { createData, updateDatadb } from "./api"
import { UserData } from "../types/Player"
import { error } from "console"

export const createRequest = () => {
  useMutation({
    mutationFn: (data) => createData(data),
    onError: () => console.error("Something went wrong"),
    onSuccess: () => console.log("Sucessfully created"),
  })
}

export const signUptoDbRequest = () => {
  return useMutation({
    mutationFn: (player: UserData) => createData(player),
    onError: () => console.log("Error create"),
    onSuccess: () => console.log("Sucessfully created user"),
    onSettled: () => console.log("settled"),
  })
}

// on settled will run no matter what -- kinda like finally

export const updateObjectReq = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: any) => updateDatadb(data),
    onSettled: (_, error, variables) => {
      queryClient.invalidateQueries({ queryKey: ["data"] })
    },
  })
}
