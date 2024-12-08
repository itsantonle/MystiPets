import { 
  getPenalties,
  createPenalty,
  assignPenalty,
  updatePenaltyType,
  updatePenaltyDuration,
  updatePenaltyDescription,
  deletePlayerPenalty,
  deletePenalty,
} from "../controllers/penaltiesController";
import express from "express";

const router = express.Router();

router.route("/getPenalties/:player_uuid").get(getPenalties);
router.route("/createPenalty").post(createPenalty);
router.route("/assignPenalty/:player_uuid").put(assignPenalty);
router.route("/updatePenaltyType/:player_uuid").put(updatePenaltyType); 
router.route("/updatePenaltyDuration/:player_uuid").put(updatePenaltyDuration); 
router.route("/updatePenaltyDescription/:player_uuid").put(updatePenaltyDescription); 
router.route("/deletePlayerPenalty/:player_uuid").delete(deletePlayerPenalty); 
router.route("/deletePenalty/:penalty_id").delete(deletePenalty); 

export default router;
