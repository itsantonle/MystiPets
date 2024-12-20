// defines api routes for pet data and imports relevant functions for GET, PUT, POST and DELETE requests

import express, { Router } from "express"
import {
  getPets,
  createPet,
  updatePetDeath,
  updatePetHappiness,
  updatePetHealth,
  updatePetHunger,
  updatePetLeaving,
  updatePetName,
  updatePetMood,
  deletePet,
} from "../controllers/petsController"

const router = express.Router()

router.route("/createPet").post(createPet) // creates pet instances
router.route("/getPet/:player_uuid").get(getPets) //gets pets
router.route("/updateName/:player_uuid").put(updatePetName) // updates pet name
router.route("/updateHealth/:player_uuid").put(updatePetHealth) //pet health
router.route("/updateHappiness/:player_uuid").put(updatePetHappiness) //pet happiness
router.route("/updateHunger/:player_uuid").put(updatePetHunger) // pet hunger
router.route("/updateDeath/:player_uuid").put(updatePetDeath) // update death status of pet
router.route("/updateLeaving/:player_uuid").put(updatePetLeaving) // updates left status of pet
router.route("/deletePet/:player_uuid").delete(deletePet) // deletes pet
router.route("/updateMood/:player_uuid").put(updatePetMood) //updates pet mood (integer)

export default router
