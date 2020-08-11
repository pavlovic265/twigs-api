import { findByIdAndReturnUser } from "core/repositories/users/findByIdAndReturnUser";
import { FindUser } from "core/dto";
import { User } from "core/entities";
import log from "lib/log";

export async function findAndReturnUserService(user: FindUser): Promise<User> {
  log.service("findAndReturnUser");

  return await findByIdAndReturnUser(user);
}
