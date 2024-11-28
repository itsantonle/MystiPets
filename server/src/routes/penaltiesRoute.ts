import { 
  getAllPenalties, 
  getOnePenalty
} from "../controllers/penaltiesController";
import express from "express";

const router = express.Router();

router.route("/").get(getAllPenalties)

router.route("/:id").get(getOnePenalty);

export default router;