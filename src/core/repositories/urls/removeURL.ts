import UserModel from "core/mongo/models/UserModel";
import { RemoveURL } from "core/dto";
import log from "lib/log";

export async function removeURL(url: RemoveURL, userId: string): Promise<void> {
  log.repository("Repositories - removeLabel");

  await UserModel.findOneAndUpdate(
    { id: userId },
    { $pull: { urls: { id: url.id } } },
  );
}
