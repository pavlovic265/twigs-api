import {
  getGithubAccessToken,
  getGithubUserInfo,
} from "services/authentiactions/githubAuthentiactions";
import {
  createAndReturnUser,
  findByUsernameAndReturnUser,
} from "core/repositories/users";
import { encodeJWT } from "lib/jwt";
import log from "lib/log";

export async function githubAccessTokenExecution(
  code: string,
): Promise<string> {
  log.execution("githubAccessToken");

  const result = await getGithubAccessToken(code);

  const githubUser = await getGithubUserInfo(result.data.access_token);

  const { email, login: username, name, avatar_url: avatar } = githubUser.data;

  let user = await findByUsernameAndReturnUser(username);

  if (user === null) {
    user = await createAndReturnUser({
      email,
      name,
      avatar,
    });
  }

  return await encodeJWT(user.id);
}
