import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://pets-node-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
})

// use this when axios connection
export default apiClient
