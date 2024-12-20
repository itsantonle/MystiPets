import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import {
  internalErrorResponse,
  successResponse,
  successUpdateResponse,
  sucessfulDeleteResponse,
  unsucessfulDeleteResponse,
  unsucessfulPostResponse,
  unsucessfulUpdateResponse,
} from "../utils/errorHandling"

export const getPets = async ( // fetch the pet belonging to a specific player
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid } = req.params
  try {
    const response = await pool.query(
      "SELECT * FROM pet WHERE player_uuid = $1",
      [player_uuid],
    )
    res.status(StatusCodes.OK).json(successResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
}

export const createPet = async ( // creates a new pet in the database
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid, pet_name, pet_type } = req.body
  try {
    const response = await pool.query(
      `INSERT INTO pet
            (player_uuid, 
            pet_name, 
            pet_type
            ) 
            VALUES ($1, $2, $3)`,
      [player_uuid, pet_name, pet_type],
    )
    res
      .status(StatusCodes.CREATED)
      .json(successResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(unsucessfulPostResponse())
  }
}

export const updatePetName = async ( // update a pet's name
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid } = req.params
  const { pet_name } = req.body
  try {
    const response = await pool.query(
      `
            UPDATE pet
            SET pet_name = $1
            WHERE player_uuid = $2
            `,
      [pet_name, player_uuid],
    )
    res
      .status(StatusCodes.OK)
      .json(successUpdateResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(unsucessfulUpdateResponse())
  }
}

export const updatePetHealth = async ( // update a pet's health status
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid } = req.params
  const { health } = req.body
  try {
    const response = await pool.query(
      `
            UPDATE pet
            SET health = $1
            WHERE player_uuid = $2
            `,
      [health, player_uuid],
    )
    res
      .status(StatusCodes.OK)
      .json(successUpdateResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_GATEWAY)
      .json(unsucessfulUpdateResponse())
  }
}

export const updatePetHunger = async ( // update a pet's hunger status
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid } = req.params
  const { hunger_status } = req.body
  try {
    const response = await pool.query(
      `
            UPDATE pet
            SET hunger_status = $1
            WHERE player_uuid = $2
            `,
      [hunger_status, player_uuid],
    )
    res
      .status(StatusCodes.OK)
      .json(successUpdateResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_GATEWAY)
      .json(unsucessfulUpdateResponse())
  }
}
//happiness
export const updatePetHappiness = async ( // update a pet's happiness status
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid } = req.params
  const { happiness_status } = req.body
  try {
    const response = await pool.query(
      `
            UPDATE pet
            SET happiness_status = $1
            WHERE player_uuid = $2
            `,
      [happiness_status, player_uuid],
    )
    res
      .status(StatusCodes.OK)
      .json(successUpdateResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(unsucessfulUpdateResponse())
  }
}

export const updatePetDeath = async ( // mark a pet as dead due to specific conditions
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid } = req.params
  const { is_dead } = req.body
  try {
    const response = await pool.query(
      `
            UPDATE pet
            SET is_dead = $1
            WHERE player_uuid = $2
            `,
      [is_dead, player_uuid],
    )
    res
      .status(StatusCodes.OK)
      .json(successUpdateResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_GATEWAY)
      .json(unsucessfulUpdateResponse())
  }
}

export const updatePetLeaving = async ( // mark a pet as having left the player due to specific conditions
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid } = req.params
  const { has_left } = req.body
  try {
    const response = await pool.query(
      `
            UPDATE pet
            SET has_left = $1
            WHERE player_uuid = $2
            `,
      [has_left, player_uuid],
    )
    res
      .status(StatusCodes.OK)
      .json(successUpdateResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(unsucessfulUpdateResponse())
  }
}

export const updatePetMood = async ( // update a pet's mood based on a player's uuid
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid } = req.params
  const { mood_id } = req.body
  try {
    const response = await pool.query(
      `
            UPDATE pet
            SET mood_id = $1
            WHERE player_uuid = $2
            `,
      [mood_id, player_uuid],
    )
    res
      .status(StatusCodes.OK)
      .json(successUpdateResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(unsucessfulUpdateResponse())
  }
}

export const deletePet = async ( // deletes a player's pet from the database
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid } = req.params
  try {
    const APIresponse = await pool.query(
      "DELETE FROM pet WHERE player_uuid = $1 ",
      [player_uuid],
    )
    res.status(StatusCodes.OK).json(sucessfulDeleteResponse())
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(unsucessfulDeleteResponse())
  }
}
