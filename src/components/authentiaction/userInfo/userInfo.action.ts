import { Request, Response } from "express";
import log from "lib/log";

export async function userInfoAction(
  req: Request,
  res: Response,
): Promise<void> {
  log.action("userInfo");

  res.status(200).send({ data: req.user });
}
