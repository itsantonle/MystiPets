import axios from "axios"
import { Player, UserData } from "../types/Player"
import Pet  from "../types/Pet"
const URL = "https://pets-node-backend.onrender.com"
const petAPI = axios.create({baseURL: URL})

// const requestUserPets = async (userId: string) => {
//   const pets = axios.get(`${URL}/${userId}`)

//   // checck if sucess is true if not then
// }

export const getUserPetID = async (userID: string): Promise<number[]> => {
  return (await petAPI.get<Pet[]>(`/getPet/${userID}`)).data.map((pet) => pet.pet_id)
}
