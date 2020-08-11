import request from "request-promise";
import cheerio from "cheerio";
import log from "lib/log";

export async function getUrlTitles(hrefEncoded: string): Promise<string[]> {
  log.service("getUrlTitles");

  const href = decodeURIComponent(hrefEncoded);
  const response: string = await request(href);

  const $ = cheerio.load(response);

  const titles: string[] = [];
  $("title").each((index, element) => {
    const el = $(element)
      .text()
      .trim();
    if (el) {
      titles.push(el);
    }
  });
  $("h1").each((index, element) => {
    const el = $(element)
      .text()
      .trim();
    if (el) {
      titles.push(el);
    }
  });

  return [...new Set(titles)];
}
