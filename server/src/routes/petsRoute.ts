import express, { Router } from 'express';
import {
    getPets,
    createPet
} from "../controllers/petsController"

const router = express.Router()

router.route('/').get(getPets).post(createPet)

export default router