import axiosClient from "../config/axiosClient"
import { Player, User } from "../types/Player"

const signUpDB = async (user: User) => {
  const newPlayer: Player = {
    player_uuid: user.id,
    player_email: user.email,
    player_username: user.username,
  }
  const response = await axiosClient.post("/endpoint", newPlayer)
  return response.data
}

// only care about storing the id on the db otherwise the sign in function doesn't need to be handled
