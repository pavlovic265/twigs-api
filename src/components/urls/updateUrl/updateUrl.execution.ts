import { updateURL } from "core/repositories/urls";
import { UpdateURL } from "core/dto";
import log from "lib/log";

export async function updateURLExecution(
  url: UpdateURL,
  userId: string,
): Promise<void> {
  log.execution("updateURL");

  await updateURL(url, userId);
}
