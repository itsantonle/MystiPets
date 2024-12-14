import axios from "axios"
import Penalty from "../../types/Penalty"

const URL = "https://pets-node-backend.onrender.com/penalty"
const penaltyAPI = axios.create({baseURL: URL})

export const getUserPenalties = async (player_uuid: string) => {
    return (await penaltyAPI.get(`/getUserPenalty/${player_uuid}`)).data.data
}

export const getPenalties = async (penalty_id: Number) => {
    return (await penaltyAPI.get(`/getPenalty/${penalty_id}`)).data.data
}

export const createPenalty = async (penalty: Penalty) => {
    await penaltyAPI.post('/createPenalty', penalty)
}

export const assignPenalty = async (player_uuid: string, player_penalty: number) => {
    await penaltyAPI.put(`/assignPenalty/${player_uuid}`, { player_penalty })
}

export const updatePenaltyType = async (penalty_id: number, penalty_type: string) => {
    await penaltyAPI.put(`/updatePenaltyType/${penalty_id}`, { penalty_type })
}

export const updatePenaltyDuration = async (penalty_id: number, penalty_duration: number) => {
    await penaltyAPI.put(`/updatePenaltyDuration/${penalty_id}`, { penalty_duration })
}

export const updatePenaltyDescription = async (penalty_id: number, penalty_description: string) => {
    await penaltyAPI.put(`/updatePenaltyDuration/${penalty_id}`, { penalty_description })
}

export const deletePlayerPenalty = async (player_uuid: string) => {
    await penaltyAPI.put(`/deletePlayerPenalty/${player_uuid}`)
}

export const deletePenalty = async (penalty_id: number) => {
    await penaltyAPI.delete(`/deletePenalty/${penalty_id}`)
}