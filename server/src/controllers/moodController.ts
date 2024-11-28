import { Request, Response } from "express";
import pool from "../db/connect";
import { StatusCodes } from "http-status-codes";

export const getAllMoods = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const response = await pool.query('SELECT * FROM mood')
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
            res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: 'Mood not found'
            });
            return
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