import { addURL } from "core/repositories/urls";
import { AddURL } from "core/dto";
import { URL } from "core/entities";
import log from "lib/log";

export function addURLExecution(url: AddURL, userId: string): Promise<URL> {
  log.execution("addUrl");

  return addURL(url, userId);
}
