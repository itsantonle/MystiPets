import { Request, Response } from "express";
import pool from "../db/connect";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../utils/errorHandling";
import { sendNotFoundError } from "../utils/errorHandling"

export const getAllPenalties = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await pool.query("SELECT * FROM penalty");
    if (response.rows.length === 0) {
      sendNotFoundError(res, "Penalties not found")
    }
    res.status(StatusCodes.OK).json({
      success: true,
      data: response.rows,
    });
  } catch (error) {
    console.error(error);
    sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "An error occurred while retrieving penalties.");
  }
};

export const getOnePenalty = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const response = await pool.query(
      "SELECT * FROM penalty WHERE penalty_id = $1",
      [id]
    );
    if (response.rows.length === 0) {
      sendNotFoundError(res, "No penalty found")
    }
    res.status(StatusCodes.OK).json({
      success: true,
      data: response.rows[0],
    });
  } catch (error) {
    console.error(error);
    sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "An error occurred while retrieving the penalty.");
  }
};
