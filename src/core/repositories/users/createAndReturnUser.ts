import { v4 as uuidv4 } from "uuid";

import UserModel from "core/mongo/models/UserModel";
import { CreateUser } from "core/dto";
import { User } from "core/entities";
import log from "lib/log";

export async function createAndReturnUser(user: CreateUser): Promise<User> {
  log.repository("createAndReturnUser");

  const userDocs = await UserModel.create({ ...user, id: uuidv4() });

  return userDocs.toObject();
}
