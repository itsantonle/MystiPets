import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { sendError } from "../utils/errorHandling"
import pool from "../db/connect"

export const getFood = async (req: Request, res: Response) => {
  try {
    const response = await pool.query("SELECT * FROM food")
    if (response.rows.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "No users found",
      })
      return
    }

    res
      .status(StatusCodes.OK)
      .json({ data: response.rows[0], success: true })
  } catch (error) {
    console.error(error)
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "An error occurred while retrieving users",
    )
  }
}
