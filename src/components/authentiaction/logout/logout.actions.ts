import { Request, Response } from "express";
import log from "lib/log";
import { JWT_COOKIE_NAME, COOKIE_OPTIONS } from "config/cookies";

export async function logoutAction(req: Request, res: Response): Promise<void> {
  log.action("logout");

  res.clearCookie(JWT_COOKIE_NAME, COOKIE_OPTIONS).status(200).end();
}
