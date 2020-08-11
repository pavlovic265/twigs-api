import { addLabel } from "core/repositories/labels";
import { AddLabel } from "core/dto";
import { Label } from "core/entities";
import log from "lib/log";

export function addLabelExecution(
  label: AddLabel,
  userId: string,
): Promise<Label> {
  log.execution("addLabel");

  return addLabel(label, userId);
}
