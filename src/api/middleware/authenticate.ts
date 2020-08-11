import { Request, Response, NextFunction } from "express";

import { findAndReturnUserService } from "services/users/findAndReturnUserService";

import log from "lib/log";
import { extractJWTFromRequest, getJWTPayload } from "utils/token";

export default async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  log.middleware("authenticate");
  try {
    const jwt = extractJWTFromRequest(req);

    if (!jwt) {
      res.status(403).json({
        error: "No token provided",
      });
      return;
    }

    const data = await getJWTPayload(jwt);

    const user = await findAndReturnUserService(data);

    req.user = user;

    next();
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
}
