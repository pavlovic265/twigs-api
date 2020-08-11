import { createAndReturnUser } from "core/repositories/users/createAndReturnUser";
import { CreateUser } from "core/dto";
import { User } from "core/entities";
import log from "lib/log";

export async function createAndReturnUserService(
  user: CreateUser,
): Promise<User> {
  log.service("createAndReturnUser");

  return await createAndReturnUser(user);
}
