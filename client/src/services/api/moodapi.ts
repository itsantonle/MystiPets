import axios from "axios"
import Mood from "../../types/Mood"

const URL = "https://pets-node-backend.onrender.com/moods"
const moodAPI = axios.create({ baseURL: URL })

export const getMood = async (mood_id: number) => {
  return (await moodAPI.get(`/getMoods/${mood_id}`)).data.data
}

export const setToDefaultMood = async (player_uuid: string) => {
  await moodAPI.put(`/setToDefaultMood/${player_uuid}`)
}
