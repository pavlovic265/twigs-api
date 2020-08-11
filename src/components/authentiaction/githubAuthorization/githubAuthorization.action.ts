import { Request, Response } from "express";
import env from "config/env";
import log from "lib/log";

export async function githubAuthorizationPageAction(
  req: Request,
  res: Response,
): Promise<void> {
  log.action("githubAuthorizationPage");
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${env.vars.GITHUB_CLIENT_ID}`,
  );
}
