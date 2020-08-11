import { Request, Response } from "express";

import { addURLExecution } from "components/urls/addUrl/addUrl.execution";
import { AddURL } from "core/dto";

export async function addUrlAction(req: Request, res: Response): Promise<void> {
  const newUrl: AddURL = req.body.url;
  const url = await addURLExecution(newUrl, req.user.id);

  res.status(201).send({ url });
}
