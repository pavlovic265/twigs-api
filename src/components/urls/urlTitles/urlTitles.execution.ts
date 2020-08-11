import { getUrlTitles } from "services/scraping/urlScraping";
import log from "lib/log";

export async function getUrlTitlesExecution(href: string): Promise<string[]> {
  try {
    log.execution("getUrlTitles");

    return await getUrlTitles(href);
  } catch (err) {
    throw new Error("Could not fetch titles from url");
  }
}
