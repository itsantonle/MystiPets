// defines api routes for penalty data and imports relevant functions for GET, PUT, POST and DELETE requests

import { 
  getUserPenalty,
  createPenalty,
  assignPenalty,
  updatePenaltyType,
  updatePenaltyDuration,
  updatePenaltyDescription,
  deletePlayerPenalty,
  deletePenalty,
  getPenalties,
} from "../controllers/penaltiesController";
import express from "express";

const router = express.Router();

router.route("/getUserPenalty/:player_uuid").get(getUserPenalty);
router.route("/getPenalty/:penalty_id").get(getPenalties)
router.route("/createPenalty").post(createPenalty);
router.route("/assignPenalty/:player_uuid").put(assignPenalty);
router.route("/updatePenaltyType/:penalty_id").put(updatePenaltyType); 
router.route("/updatePenaltyDuration/:penalty_id").put(updatePenaltyDuration); 
router.route("/updatePenaltyDescription/:penalty_id").put(updatePenaltyDescription); 
router.route("/deletePlayerPenalty/:player_uuid").delete(deletePlayerPenalty); 
router.route("/deletePenalty/:penalty_id").delete(deletePenalty); 

export default router;
