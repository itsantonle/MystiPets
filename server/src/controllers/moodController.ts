import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import {
  internalErrorResponse,
  successResponse,
  sucessfulDeleteResponse,
  unsucessfulDeleteResponse,
} from "../utils/errorHandling"

export const getMood = async (
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


