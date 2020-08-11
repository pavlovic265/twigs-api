import UserModel from "core/mongo/models/UserModel";
import { v4 as uuidv4 } from "uuid";

import { AddLabel } from "core/dto";
import { Label, User } from "core/entities";
import { mapLabel } from "utils/mapEntities";
import log from "lib/log";

export async function addLabel(
  label: AddLabel,
  userId: string,
): Promise<Label> {
  log.repository("addLabel");

  const value = label.value.toUpperCase();
  const now = Date.now();

  const user: User | null = await UserModel.findOneAndUpdate(
    { id: userId, "labels.value": { $ne: value } },
    {
      $push: {
        labels: {
          ...label,
          value,
          id: uuidv4(),
          created: now,
          updated: now,
        },
      },
    },
    { new: true },
  ).lean();

  if (!user) {
    throw new Error("Label already exists");
  }

  const labelObject = mapLabel(user.labels, value);

  return labelObject;
}
