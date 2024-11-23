import pool from "../db/connect"
import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { v4 } from "uuid"

export const getData = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await pool.query("SELECT * FROM dbTABLE")
    res.status(StatusCodes.OK).json({ sucess: true })
  } catch (error) {
    console.error(error)
  }
}

export const getOneData = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params
  try {
    const response = await pool.query(
      "SELECT * FROM dbTABLE WHERE id = $1",
      [id],
    )
  } catch (error) {
    console.error(error)
  }
}

export const createEntityInstance = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const pk = v4()
  const { valueA, valueB } = req.body
  try {
    const response = await pool.query(
      "INSERT INTO dbTABLE(id, ATTR1, ATTR2) VALUES($1, $2, $3)",
      [pk, valueA, valueB],
    )
    res.status(StatusCodes.CREATED).json({ sucess: true })
  } catch (error) {
    console.error(error)
  }
}

export const updateEntityInstance = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params
  const { valueA, valueB } = req.body

  try {
    const APIresponse = await pool.query(
      "UPDATE dbTable SET COL1 = $1, COL2 = $2 WHERE id = $3",
      [valueA, valueB, id],
    )

    res
      .status(StatusCodes.OK)
      .json({ data: APIresponse.rows, sucess: true })
  } catch (error) {
    console.error(error)
  }
}

export const deleteEntityInstance = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params
  try {
    const APIresponse = await pool.query(
      "DELETE FROM dbTable WHERE id = $1 ",
      [id],
    )
    res.status(StatusCodes.OK).json({ sucess: true })
  } catch (error) {
    console.error(error)
  }
}
