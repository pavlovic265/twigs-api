import UserModel from "core/mongo/models/UserModel";
import { UpdateURL } from "core/dto";
import log from "lib/log";

export async function updateURL(url: UpdateURL, userId: string): Promise<void> {
  log.repository("updateURL");

  await UserModel.updateOne(
    { id: userId, "urls.id": url.id },
    {
      $set: {
        "urls.$.href": url.href,
        "urls.$.title": url.title,
        "urls.$.labels": url.labels,
        "urls.$.updated": Date.now(),
      },
    },
  );
}
