import { Request, Response } from "express";

import { googleAccessTokenExecution } from "components/authentiaction/googleAccessToken/googleAccessToken.execution";
import env from "config/env";
import log from "lib/log";
import { COOKIE_OPTIONS, JWT_COOKIE_NAME } from "config/cookies";
import { constuctJWTForResponse } from "utils/token";
/**
 * NOTE-COOKIE:
 * As a temp solution I will pass jwt in url until I figure out
 * what how to pass them with cookies.
 */
export async function googleAccessTokenAction(
  req: Request,
  res: Response,
): Promise<void> {
  log.action("googleAccessToken");

  const { code } = req.query;

  if (!code) {
    throw new Error("Error no code");
  }

  const userId = await googleAccessTokenExecution(code);

  const { code: tokenCode, token } = await constuctJWTForResponse(userId);

  res
    .cookie(JWT_COOKIE_NAME, token, COOKIE_OPTIONS)
    // .redirect(`${env.vars.WEB_APP_URL}/login/${tokenCode}`);
    .redirect(`${env.vars.WEB_APP_URL}/login/${tokenCode}.${token}`);
}
