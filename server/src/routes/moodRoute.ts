import express from 'express';
import {
    getAllMoods,
    getOneMood
} from '../controllers/moodController'

const router = express.Router();

router.route('/').get(getAllMoods)
router.route('/:mood_type').get(getOneMood)

export default router