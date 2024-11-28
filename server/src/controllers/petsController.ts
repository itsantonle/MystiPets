import { Request, Response } from "express";
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"

export const getPets = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { player_uuid } = req.params
    try {
        const response = await pool.query(
            "SELECT * FROM pet WHERE player_uuid = $1", [player_uuid])
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
        player_uuid, 
        pet_name, 
        pet_type, 
        hunger_status,
        happiness_status,
        is_dead,
        has_left,
        health,
        food_id,
        mood_id
    } = req.body
    try {
        const response = await pool.query(
            `INSERT INTO pet
            (player_uuid, 
            pet_name, 
            pet_type, 
            hunger_status, 
            happiness_status, 
            is_dead, 
            has_left, 
            health, 
            food_id,
            mood_id) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [player_uuid, pet_name, pet_type, hunger_status, happiness_status, is_dead, has_left, health, food_id, mood_id],
        )
        res.status(StatusCodes.CREATED).json({success:true})
    } catch (error) {    
        console.log(error)
    }
}

//name
export const updatePetName = async (
    req: Request,
    res: Response
): Promise<void> => {
    const {player_uuid} = req.params
    const {pet_name} = req.body
    try {
        const response = await pool.query(`
            UPDATE pet
            SET pet_name = $1
            WHERE player_uuid = $2
            `, [pet_name, player_uuid])
            res.status(StatusCodes.OK).json({data: response.rows, success: true})
    } catch (error) {
        console.log(error)
    }
}

//health
export const updatePetHealth = async(
    req: Request,
    res: Response
): Promise<void> => {
    const {player_uuid} = req.params
    const {health} = req.body
    try {
        const response = await pool.query(`
            UPDATE pet
            SET health = $1
            WHERE player_uuid = $2
            `, [health, player_uuid])
            res.status(StatusCodes.OK).json({data: response.rows, success: true})
    } catch (error) {
        console.log(error)
    }
}
//hunger
export const updatePetHunger = async(
    req: Request,
    res: Response
): Promise<void> => {
    const {player_uuid} = req.params
    const {hunger_status} = req.body
    try {
        const response = await pool.query(`
            UPDATE pet
            SET hunger_status = $1
            WHERE player_uuid = $2
            `, [hunger_status, player_uuid])
            res.status(StatusCodes.OK).json({data: response.rows, success: true})
    } catch (error) {
        console.log(error)
    }
}
//happiness
export const updatePetHappiness = async(
    req: Request,
    res: Response
): Promise<void> => {
    const {player_uuid} = req.params
    const {happiness_status} = req.body
    try {
        const response = await pool.query(`
            UPDATE pet
            SET happiness_status = $1
            WHERE player_uuid = $2
            `, [happiness_status, player_uuid])
            res.status(StatusCodes.OK).json({data: response.rows, success: true})
    } catch (error) {
        console.log(error)
    }
}
//is_dead
export const updatePetDeath = async(
    req: Request,
    res: Response
): Promise<void> => {
    const {player_uuid} = req.params
    const {is_dead} = req.body
    try {
        const response = await pool.query(`
            UPDATE pet
            SET is_dead = $1
            WHERE player_uuid = $2
            `, [is_dead, player_uuid])
            res.status(StatusCodes.OK).json({data: response.rows, success: true})
    } catch (error) {
        console.log(error)
    }
}

//has_left
export const updatePetLeaving = async(
    req: Request,
    res: Response
): Promise<void> => {
    const {player_uuid} = req.params
    const {has_left} = req.body
    try {
        const response = await pool.query(`
            UPDATE pet
            SET has_left = $1
            WHERE player_uuid = $2
            `, [has_left, player_uuid])
            res.status(StatusCodes.OK).json({data: response.rows, success: true})
    } catch (error) {
        console.log(error)
    }
}

export const updatePetMood = async (
    req: Request,
    res: Response
): Promise<void> => {
    const {player_uuid} = req.params
    const {mood_id} = req.body
    try {
        const response = await pool.query(`
            UPDATE pet
            SET mood_id = $1
            WHERE player_uuid = $2
            `, [mood_id, player_uuid])
            res.status(StatusCodes.OK).json({data: response.rows, success: true})
    } catch (error) {
        console.log(error)
    }
}

export const deletePet = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const { player_uuid } = req.params
    try {
      const APIresponse = await pool.query(
        "DELETE FROM pet WHERE player_uuid = $1 ",
        [player_uuid],
      )
      res.status(StatusCodes.OK).json({ sucess: true })
    } catch (error) {
      console.error(error)
    }
  }

