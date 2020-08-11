import UserModel from "core/mongo/models/UserModel";
import { User } from "core/entities";
import log from "lib/log";

export async function findByUsernameAndReturnUser(
  username: string,
): Promise<User | null> {
  log.repository("findGithubUserAndReturn");

  const userDocs = (await UserModel.findOne({
    username: username,
  }).lean()) as User;

  if (userDocs) {
    return userDocs;
  }

  return null;
}
