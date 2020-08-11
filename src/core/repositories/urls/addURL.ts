import { v4 as uuidv4 } from "uuid";

import UserModel from "core/mongo/models/UserModel";
import { AddURL } from "core/dto";
import { URL, User } from "core/entities";
import { mapUrl } from "utils/mapEntities";
import log from "lib/log";

export async function addURL(url: AddURL, userId: string): Promise<URL> {
  log.repository("addUrl");

  const now = Date.now();

  const user = (await UserModel.findOneAndUpdate(
    {
      id: userId,
      "urls.href": { $ne: url.href },
      "labels.id": { $all: url.labels },
    },
    { $push: { urls: { ...url, id: uuidv4(), created: now, updated: now } } },
    { new: true },
  ).lean()) as User;

  if (!user) {
    throw new Error("Url already exists");
  }

  const addedUrl: URL = mapUrl(user.urls, url.href);

  return addedUrl;
}
