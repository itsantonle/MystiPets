import axios from "axios"
import { Player, UserData } from "../types/Player"
import Pet  from "../types/Pet"
const URL = "https://pets-node-backend.onrender.com"
const petAPI = axios.create({baseURL: URL})

// const requestUserPets = async (userId: string) => {
//   const pets = axios.get(`${URL}/${userId}`)

//   // checck if sucess is true if not then
// }

export const getUserPet = async (userID: string): Promise<Pet[]> => {
  return (await petAPI.get(`/pets/getPet/${userID}`)).data.data
}

export const createPet = async (pet: Pet) => {
  await petAPI.post('/pets/createPet', pet)
}
