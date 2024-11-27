import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export const sendError = (
  res: Response,
  statusCode: number,
  message: string
): void => {
  res.status(statusCode).json({
    success: false,
    message: message,
  });
};