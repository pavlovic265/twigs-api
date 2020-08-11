import { removeURL } from "core/repositories/urls";
import { RemoveURL } from "core/dto";
import log from "lib/log";

export async function removeURLExecution(
  url: RemoveURL,
  userId: string,
): Promise<void> {
  log.execution("removeLabel");

  await removeURL(url, userId);
}
