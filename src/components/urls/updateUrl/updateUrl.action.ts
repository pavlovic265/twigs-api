import { Request, Response } from "express";

import { updateURLExecution } from "components/urls/updateUrl/updateUrl.execution";
import { UpdateURL } from "core/dto";

export async function updateUrlAction(
  req: Request,
  res: Response,
): Promise<void> {
  const url: UpdateURL = req.body.url;

  await updateURLExecution(url, req.user.id);

  res.status(200).send();
}
