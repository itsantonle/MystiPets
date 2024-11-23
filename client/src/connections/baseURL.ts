import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
})

// you can rename this as axiosClient or something that is customized axious base
export default apiClient
