import {
  getAllUsers,
  createUser,
  getOneUser,
} from "../controllers/usersController"
import express from "express"

const router = express.Router()

router.route("/").get(getAllUsers).post(createUser)

router.route("/:id").get(getOneUser)

export default router
