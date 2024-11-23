const PORT = 3005
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import ObjectRouter from "./routes/objectRoute"

const app = express()
app.use(cors())
app.use(express.json())

// routes
app.use("/baseURL", ObjectRouter)
app.listen(PORT, () => {
  console.log(`listing to PORT: ${PORT}`)
})
