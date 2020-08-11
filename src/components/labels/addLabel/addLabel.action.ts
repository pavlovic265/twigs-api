import { Request, Response } from "express";
import { addLabelExecution } from "components/labels/addLabel/addLabel.execution";
import log from "lib/log";
import { AddLabel } from "core/dto";

export async function addLabelAction(
  req: Request,
  res: Response,
): Promise<void> {
  log.action("addLabel");
  const newLabel: AddLabel = req.body.label;

  const label = await addLabelExecution(newLabel, req.user.id);

  res.status(201).send({ label });
}
