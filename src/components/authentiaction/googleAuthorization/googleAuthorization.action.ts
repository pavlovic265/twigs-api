import { Request, Response } from "express";
// import { getGoogleAuthorizationUrl } from "services/authentiactions/googleAuthentiactions";
import log from "lib/log";
import env from "config/env";

const RESPONSE_TYPE = "code";
const SCOPE =
  "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";
export async function googleAuthorizationPageAction(
  req: Request,
  res: Response,
): Promise<void> {
  log.action("googleAuthorizationPage");

  const { GOOGLE_REDIRECT_URI, GOOGLE_CLIENT_ID } = env.vars;

  res.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?response_type=${RESPONSE_TYPE}&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}&scope=${SCOPE}`,
  );
}
