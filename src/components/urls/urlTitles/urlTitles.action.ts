import { Request, Response } from "express";

import { getUrlTitlesExecution } from "components/urls/urlTitles/urlTitles.execution";

export async function urlTitlesAction(
  req: Request,
  res: Response,
): Promise<void> {
  const { href } = req.params;
  const titles = await getUrlTitlesExecution(href);

  res.status(200).send({ titles });
}
