import { Request, Response, NextFunction } from "express"

// middleware to handle requests to nonexisting routes

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
    method: req.method,
  })
}
export default notFoundMiddleware
