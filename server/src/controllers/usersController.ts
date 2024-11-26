import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"

export const getAllUsers = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await pool.query("SELECT * FROM player")
    res
      .status(StatusCodes.OK)
      .json({ data: response.rows, sucess: true })
  } catch (error) {
    console.error(error)
  }
}
export const getOneUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params
  res.send(`GET ONE ${id}`)
}
export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  //should add password column
  // should use b crypt to hash it

  const { username } = req.body
  try {
    const response = await pool.query(
      "INSERT INTO player(player_username) VALUES($1)",
      [username],
    )
    res.status(StatusCodes.CREATED).json({ sucess: true })
  } catch (error) {
    console.error(error)
  }
}
