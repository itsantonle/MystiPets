import axios from "axios"
// import { Player, UserData } from "../../types/Player"
import { Pet } from "../../types/Pet"
const URL = "https://pets-node-backend.onrender.com/pets"
const petAPI = axios.create({ baseURL: URL })

// const requestUserPets = async (userId: string) => {
//   const pets = axios.get(`${URL}/${userId}`)

//   // checck if sucess is true if not then
// }

export const getUserPet = async (
  player_uuid: string,
): Promise<Pet[]> => {
  return (await petAPI.get(`/getPet/${player_uuid}`)).data.data
}

export const createPet = async (pet: Pet) => {
  await petAPI.post("/createPet", pet)
}

export const updatePetHealth = async (
  player_uuid: string,
  health: number,
) => {
  await petAPI.put(`/updateHealth/${player_uuid}`, { health })
}

export const updatePetName = async (
  player_uuid: string,
  pet_name: string,
) => {
  await petAPI.put(`/updateName/${player_uuid}`, { pet_name })
}

export const updatePetHunger = async (
  player_uuid: string,
  hunger_status: number,
) => {
  await petAPI.put(`/updateHunger/${player_uuid}`, { hunger_status })
}

export const updatePetHappiness = async (
  player_uuid: string,
  happiness_status: number,
) => {
  await petAPI.put(`/updateHappiness/${player_uuid}`, {
    happiness_status,
  })
}

export const updatePetDeath = async (
  player_uuid: string,
  is_dead: boolean,
) => {
  await petAPI.put(`/updateDeath/${player_uuid}`, { is_dead })
}

export const updatePetLeaving = async (
  player_uuid: string,
  has_left: boolean,
) => {
  await petAPI.put(`/updateLeaving/${player_uuid}`, { has_left })
}

export const updatePetMood = async (
  player_uuid: string,
  mood_id: number,
) => {
  await petAPI.put(`/updateMood/${player_uuid}`, { mood_id })
}

export const deletePet = async (player_uuid: string) => {
  await petAPI.delete(`/deletePet/${player_uuid}`)
}
