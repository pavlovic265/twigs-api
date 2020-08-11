import UserModel from "core/mongo/models/UserModel";
import { User } from "core/entities";
import log from "lib/log";

export async function findByEmailAndReturnUser(
  email: string,
): Promise<User | null> {
  log.repository("findByEmailAndReturnUser");

  const userDocs = (await UserModel.findOne({ email }).lean()) as User;

  if (userDocs) {
    return userDocs;
  }

  return null;
}
