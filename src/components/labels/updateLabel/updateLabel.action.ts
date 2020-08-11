import { Request, Response } from "express";
import { updateLabelExecution } from "components/labels/updateLabel/updateLabel.execution";
import log from "lib/log";
import { UpdateLabel } from "core/dto";

export async function updateLabelAction(
  req: Request,
  res: Response,
): Promise<void> {
  log.action("updateLabel");
  const label: UpdateLabel = req.body.label;

  await updateLabelExecution(label, req.user.id);

  res.status(200).send();
}
