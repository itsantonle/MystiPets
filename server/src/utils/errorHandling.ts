import { Response } from "express"
import { StatusCodes } from "http-status-codes"

export const sendError = (
  res: Response,
  statusCode: number,
  message?: string,
): void => {
  res.status(statusCode).json({
    success: false,
    message: message,
  })
}

export const emptyTableError = (
  res: Response,
  message?: string,
  statusCode?: number,
) => {
  statusCode = 500
  message = "No data was returned by the server"

  res.json({ success: false, message, statusCode })
}
