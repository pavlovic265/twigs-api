import { Request, Response } from "express";

import { removeURLExecution } from "components/urls/removeUrl/removeUrl.execution";
import { RemoveURL } from "core/dto";

export async function removeUrlAction(
  req: Request,
  res: Response,
): Promise<void> {
  const url: RemoveURL = { id: req.params.id };

  await removeURLExecution(url, req.user.id);

  res.status(200).send();
}
