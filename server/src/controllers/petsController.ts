import { Request, Response } from "express";
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"

export const getPets = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { player_id } = req.body
    try {
        const response = await pool.query(
            "SELECT * FROM pet WHERE player_id = $1", [player_id])
            res.status(StatusCodes.OK).json({data: response.rows, success: true})
    } catch (error) {
        console.log(error)
    }
}

export const createPet = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { 
        player_id, 
        pet_name, 
        pet_type, 
        hunger_status,
        happiness_status,
        is_dead,
        has_left,
        health,
        food_id,
        position_x,
        position_y
    } = req.body
    try {
        const response = await pool.query(
            `
            INSERT INTO pet(player_id, pet_name, pet_type, hunger_status, happiness_status, is_dead, has_left, health, food_id, position_x, position_y) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [player_id, pet_name, pet_type, hunger_status, happiness_status, is_dead, has_left, health, food_id, position_x, position_y]
        )
        res.status(StatusCodes.CREATED).json({success:true})
    } catch (error) {    
        console.log(error)
    }
}

export const updatePet = async (
    req: Request,
    res: Response
): Promise<void> => {
    
}