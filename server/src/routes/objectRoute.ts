import {
  createEntityInstance,
  deleteEntityInstance,
  getData,
  getOneData,
  updateEntityInstance,
} from "../controllers/objectController"
import express from "express"

const router = express.Router()

router.route("/baseURL").get(getData).post(createEntityInstance)
router
  .route("/baseURL/:id")
  .get(getOneData)
  .put(updateEntityInstance)
  .delete(deleteEntityInstance)

export default router
