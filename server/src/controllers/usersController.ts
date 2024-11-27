import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import hashPassword from "../utils/hashPassword";
import { sendError } from "../utils/errorHandling";

export const getAllUsers = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await pool.query("SELECT * FROM player")
    if (response.rows.length === 0) {
      res.
      status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "No users found",
      });
      return; 
    }

    res
      .status(StatusCodes.OK)
      .json({ data: response.rows, success: true })
  } catch (error) {
    console.error(error)
    sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "An error occurred while retrieving users");
  }
}
export const getOneUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params
  try {
    const response = await pool.query("SELECT * FROM player WHERE player_id = $1", [id]);
    if (response.rows.length === 0) {
      res.
      status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "No user found",
      });
      return; 
    }
    res
      .status(StatusCodes.OK)
      .json({ data: response.rows, success: true })

  } catch (error) {
    console.error(error)
    sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "An error occurred while retrieving the user");
  }
}
export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {

  const { username, password } = req.body
  try {
    const hashedPassword = await hashPassword(password);
    const response = await pool.query(
      "INSERT INTO player(player_username, player_password) VALUES($1, $2)",
      [username, hashedPassword]
    );

    res.status(StatusCodes.CREATED).json({ success: true })
  } catch (error) {
    console.error(error)
    sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "An error occurred while creating the user");
  }
}
