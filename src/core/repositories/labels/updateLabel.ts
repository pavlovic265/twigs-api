import UserModel from "core/mongo/models/UserModel";

import { UpdateLabel } from "core/dto";
import log from "lib/log";

export async function updateLabel(
  label: UpdateLabel,
  userId: string,
): Promise<void> {
  log.repository("updateLabel");

  await UserModel.updateOne(
    { id: userId, "labels.id": label.id },
    {
      $set: {
        "labels.$.value": label.value.toUpperCase(),
        "labels.$.color": label.color,
        "labels.$.updated": Date.now(),
      },
    },
  );
}
