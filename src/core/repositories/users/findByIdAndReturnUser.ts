import UserModel from "core/mongo/models/UserModel";
import { FindUser } from "core/dto";
import { User } from "core/entities";
import log from "lib/log";

export async function findByIdAndReturnUser(user: FindUser): Promise<User> {
  log.repository("findAndReturnUser");

  const userDocs: User | null = await UserModel.findOne({ id: user.id }).lean();

  if (userDocs === null) {
    throw new Error("User dose not exist");
  }

  return {
    id: userDocs.id,
    name: userDocs.name,
    username: userDocs.username,
    email: userDocs.email,
    avatar: userDocs.avatar,
    labels: userDocs.labels,
    urls: userDocs.urls,
  };
}
