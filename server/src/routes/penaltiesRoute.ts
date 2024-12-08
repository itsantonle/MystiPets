import { 
  getPenalties,
  createPenalty,
  updatePenaltyType,
  updatePenaltyDuration,
  updatePenaltyDescription,
  deletePenalty,
} from "../controllers/penaltiesController";
import express from "express";

const router = express.Router();

router.route("/getPenalties").get(getPenalties);
router.route("/createPenalty").post(createPenalty);
router.route("/updatePenaltyType/:penalty_id").put(updatePenaltyType); 
router.route("/updatePenaltyDuration/:penalty_id").put(updatePenaltyDuration); 
router.route("/updatePenaltyDescription/:penalty_id").put(updatePenaltyDescription); 
router.route("/deletePenalty/:penalty_id").delete(deletePenalty); 

export default router;
