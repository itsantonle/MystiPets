import { Request, Response } from "express";
import pool from "../db/connect";
import { StatusCodes } from "http-status-codes";
import { sendNotFoundError } from "../utils/errorHandling"

export const getAllMoods = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const response = await pool.query('SELECT * FROM mood')
        if (response.rows.length === 0) {
            sendNotFoundError(res, "Moods not found")
          }
          
        res.status(StatusCodes.OK).json({data: response.rows, success: true})
    } catch (error) {
        console.log(error)
    }
}

export const getOneMood = async (
    req: Request,
    res: Response
): Promise<void> => {
    const {mood_type} = req.params
    try {
        const response = await pool.query('SELECT * FROM mood WHERE mood_type = $1', [mood_type])
        if (response.rows.length === 0) {
            sendNotFoundError(res, "Mood is not found")
        } else {
            res.status(StatusCodes.OK).json({
                data: response.rows,
                success: true
            })
        }
    } catch (error) {
        console.log(error)
    }
}