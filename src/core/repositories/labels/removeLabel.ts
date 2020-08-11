import UserModel from "core/mongo/models/UserModel";

import { RemoveLabel } from "core/dto";
import log from "lib/log";

export async function removeLabel(
  label: RemoveLabel,
  userId: string,
): Promise<void> {
  log.repository("deleteLabel");

  await UserModel.updateOne(
    { id: userId },
    {
      $pull: {
        labels: { id: label.id },
        "urls.$[url].labels": { $in: [label.id] },
      },
    },
    {
      arrayFilters: [{ "url.labels": { $eq: label.id } }],
    },
  );
}
