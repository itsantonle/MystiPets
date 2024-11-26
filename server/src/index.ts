import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import ObjectRouter from "./routes/objectRoute"
import UsersRouter from "./routes/usersRoute"
import { awaitConnection } from "./db/connect"
import notFoundMiddleware from "./middleware/notFound"
import errorHandlerMiddleware from "./middleware/errorHandler"

const app = express()

app.use(cors())
app.use(express.json())

// routes
app.use("/baseURL", ObjectRouter)
app.use("/users", UsersRouter)

// middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const PORT = 3009 // add the deployed backedn application port here

const start = async (): Promise<void> => {
  try {
    await awaitConnection()
    app.listen(PORT, () => {
      console.log(
        `listing to PORT: ${PORT} \n Connection to DB SUCESS!`,
      )
    })
  } catch (error) {
    console.error("Failed connection to DB")
  }
}

start()
