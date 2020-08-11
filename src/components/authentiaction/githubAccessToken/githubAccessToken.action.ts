import { Request, Response } from "express";

import { githubAccessTokenExecution } from "components/authentiaction/githubAccessToken/githubAccessToken.execution";
import env from "config/env";
import log from "lib/log";

export async function githubAccessTokenAction(
  req: Request,
  res: Response,
): Promise<void> {
  log.action("githubAccessToken");

  const { code } = req.query;

  if (!code) {
    throw new Error("Error no code");
  }

  const token = await githubAccessTokenExecution(code);

  res.redirect(`${env.vars.WEB_APP_URL}/login/${token}`);
}
