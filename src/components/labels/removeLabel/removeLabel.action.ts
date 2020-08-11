import { Request, Response } from "express";
import { removeLabelExecution } from "components/labels/removeLabel/removeLabel.execution";
import log from "lib/log";
import { RemoveLabel } from "core/dto";

export async function removeLabelAction(
  req: Request,
  res: Response,
): Promise<void> {
  log.action("removeLabel");
  const label: RemoveLabel = {
    id: req.params.id,
  };

  await removeLabelExecution(label, req.user.id);

  res.status(200).send();
}
