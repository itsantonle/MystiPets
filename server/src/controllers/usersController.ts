import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import hashPassword from "../utils/hashPassword"
import { sendError } from "../utils/errorHandling"
import { sendNotFoundError } from "../utils/errorHandling"

export const getAllUsers = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await pool.query("SELECT * FROM player")
    if (response.rows.length === 0) {
      sendNotFoundError(res, "No users found")
    }

    res
      .status(StatusCodes.OK)
      .json({ data: response.rows, success: true })
  } catch (error) {
    console.error(error)
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "An error occurred while retrieving users",
    )
  }
}
export const getOneUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params
  try {
    const response = await pool.query(
      "SELECT * FROM player WHERE player_uuid = $1",
      [id],
    )
    if (response.rows.length === 0) {
      sendNotFoundError(res, "User not found")
    }
    res
      .status(StatusCodes.OK)
      .json({ data: response.rows, success: true })
  } catch (error) {
    console.error(error)
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "An error occurred while retrieving the user",
    )
  }
}
export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid, player_username, player_email } = req.body
  try {
    const response = await pool.query(
      "INSERT INTO player(player_uuid, player_username, player_email) VALUES($1, $2, $3)",
      [player_uuid, player_username, player_email],
    )

    res.status(StatusCodes.CREATED).json({ success: true })
  } catch (error) {
    console.error(error)
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "An error occurred while creating the user",
    )
  }
}
