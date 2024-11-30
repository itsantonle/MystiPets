import axios from "axios"
import { Player, UserData } from "../types/Player"
const URL = "https://pets-node-backend.onrender.com"

const requestUserPets = async (userId: string) => {
  const pets = axios.get(`${URL}/${userId}`)

  // checck if sucess is true if not then
}
