import axiosClient from "../config/axiosClient"
import { Player, UserData } from "../types/Player"
const URL = "https://pets-node-backend.onrender.com"

export const getData = async () => {
  const response = await axiosClient.get(URL)
  return response.data
}

export const createData = async (data: any) => {
  const response = await axiosClient.post(URL, data)
  return response.data
}

export const signUptoDb = async (player: UserData) => {
  const actualPlayer: Player = {
    player_email: player.email,
    player_username: player.username,
    player_uuid: player.id,
  }
  const response = await axiosClient.post("/users", actualPlayer)
  return response.data
}

export const updateDatadb = async (data: any) => {
  const params = "dsfsdf"
  const response = await axiosClient.put("/route/param", data)
  return response.data
}
