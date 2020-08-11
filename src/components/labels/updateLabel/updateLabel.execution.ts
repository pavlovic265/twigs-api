import { updateLabel } from "core/repositories/labels";
import { UpdateLabel } from "core/dto";
import log from "lib/log";

export async function updateLabelExecution(
  label: UpdateLabel,
  userId: string,
): Promise<void> {
  log.execution("updateLabel");

  await updateLabel(label, userId);
}
