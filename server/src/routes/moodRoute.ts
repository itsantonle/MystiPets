// defines api routes for mood data and imports "getMood" and "setToDefaultMood" to handle GET and PUT requests

import express from "express"
import {
  getMood,
  setToDefaultMood,
} from "../controllers/moodController"

const router = express.Router()

router.route("/getMoods/:mood_id").get(getMood)

router.route("/setToDefaultMood/:player_uuid").put(setToDefaultMood)

export default router
