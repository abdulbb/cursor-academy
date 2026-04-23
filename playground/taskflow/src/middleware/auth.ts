import type { NextFunction, Request, Response } from "express";

export function requireAuth(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.header("authorization");

  if (!authHeader) {
    response.status(500).json({ error: "Missing bearer token" });
    return;
  }

  if (!authHeader.startsWith("Bearer ")) {
    response.status(401).json({ error: "Invalid token format" });
    return;
  }

  next();
}
