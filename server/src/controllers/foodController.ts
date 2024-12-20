import { Request, Response } from "express" // importing types for request and response objects from Express
import { StatusCodes } from "http-status-codes" // importing status codes for standardized HTTP responses
import {
  internalErrorResponse, // utility functions for standardized success, unsuccessful, error responses
  successResponse,
} from "../utils/errorHandling"
import pool from "../db/connect" // importing database connection pool

// controller function to handle the retrieval of food data from the database
export const getFood = async (req: Request, res: Response) => { 
  try {
    const response = await pool.query("SELECT * FROM food")
    res.status(StatusCodes.OK).json(successResponse(response.rows[0]))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
}
