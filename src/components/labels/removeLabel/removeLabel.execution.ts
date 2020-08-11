import { removeLabel } from "core/repositories/labels";
import { RemoveLabel } from "core/dto";
import log from "lib/log";

export function removeLabelExecution(label: RemoveLabel, userId: string): void {
  log.execution("removeLabel");

  removeLabel(label, userId);
}
