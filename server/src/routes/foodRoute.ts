import { getFood } from "../controllers/foodController"
import express from "express"

const router = express.Router()

router.route("/").get(getFood)

export default router
