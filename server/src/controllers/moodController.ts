import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import {
  internalErrorResponse, // utility functions for standardized success, unsuccessful, error responses
  successResponse,
  sucessfulDeleteResponse,
  unsucessfulDeleteResponse,
} from "../utils/errorHandling"

export const getMood = async ( // fetch a specific mood by its ID
  req: Request,
  res: Response,
): Promise<void> => {
  const { mood_id } = req.params
  try {
    const response = await pool.query(
      `SELECT * FROM mood WHERE mood_id = $1`,
      [mood_id],
    )

    res.status(StatusCodes.OK).json(successResponse(response.rows))
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
}

export const setToDefaultMood = async ( // function to reset a mood type to the default "happy" type
  req: Request,
  res: Response,
): Promise<void> => {
  const { mood_type } = req.params

  try {
    const response = await pool.query(
      `"SELECT * FROM mood WHERE mood_type = happy`,
    )

    res.status(StatusCodes.OK).json(sucessfulDeleteResponse())
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(unsucessfulDeleteResponse())
  }
}


