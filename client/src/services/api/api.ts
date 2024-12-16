import axios from "axios"
import { Player, UserData } from "../../types/Player"
const URL = "https://pets-node-backend.onrender.com"
const userAPI = axios.create({
  baseURL: "https://pets-node-backend.onrender.com/users",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

export const signUptoDb = async (player: UserData) => {
  const actualPlayer: Player = {
    player_email: player.email,
    player_username: player.username,
    player_uuid: player.id,
  }
  const response = await axios.post(
    "https://pets-node-backend.onrender.com/users",
    actualPlayer,
  )
  return response.data
}

export const getLoggedInUser = async (
  player_uuid: string,
): Promise<Player> => {
  return (await userAPI.get(`/${player_uuid}`)).data.data
}
