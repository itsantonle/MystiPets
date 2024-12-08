import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import {
  internalErrorResponse,
  successResponse,
  successUpdateResponse,
  sucessfulDeleteResponse,
  successPostResponse,
  unsucessfulDeleteResponse,
  unsucessfulPostResponse,
  unsucessfulUpdateResponse,
} from "../utils/errorHandling"

export const getPenalties = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await pool.query("SELECT * FROM penalty");
    res.status(StatusCodes.OK).json(successResponse(response.rows));
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
};

export const createPenalty = async (req: Request, res: Response): Promise<void> => {
  const { penalty_id, penalty_type, penalty_duration, penalty_description } = req.body;
  try {
    const response = await pool.query(
      `INSERT INTO penalty (penalty_id, penalty_type, penalty_duration, penalty_description)
      VALUES ($1, $2, $3, $4)`,
      [penalty_id, penalty_type, penalty_duration, penalty_description]
    );
    res.status(StatusCodes.CREATED).json(successPostResponse(response.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulPostResponse());
  }
};

export const updatePenaltyType = async (req: Request, res: Response): Promise<void> => {
  const { penalty_id } = req.params;
  const { penalty_type } = req.body;
  try {
    const response = await pool.query(
      `UPDATE penalty
      SET penalty_type = $1
      WHERE penalty_id = $2`,
      [penalty_type, penalty_id]
    );
    res.status(StatusCodes.OK).json(successUpdateResponse(response.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulUpdateResponse());
  }
};

export const updatePenaltyDuration = async (req: Request, res: Response): Promise<void> => {
  const { penalty_id } = req.params;
  const { penalty_duration } = req.body;
  try {
    const response = await pool.query(
      `
      UPDATE penalty
      SET penalty_duration = $1
      WHERE penalty_id = $2 RETURNING *`,
      [penalty_duration, penalty_id]
    );
    res.status(StatusCodes.OK).json(successUpdateResponse(response.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulUpdateResponse());
  }
};

export const updatePenaltyDescription = async (req: Request, res: Response): Promise<void> => {
  const { penalty_id } = req.params;
  const { penalty_description } = req.body;
  try {
    const response = await pool.query(
      `
      UPDATE penalty
      SET penalty_description = $1
      WHERE penalty_id = $2 RETURNING *`,
      [penalty_description, penalty_id]
    );
    res.status(StatusCodes.OK).json(successUpdateResponse(response.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulUpdateResponse());
  }
};

export const deletePenalty = async (req: Request, res: Response): Promise<void> => {
  const { penalty_id } = req.params;
  try {
    const response = await pool.query("DELETE FROM penalty WHERE penalty_id = $1", [penalty_id]);

    res.status(StatusCodes.OK).json(sucessfulDeleteResponse());
    
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulDeleteResponse());
  }
};