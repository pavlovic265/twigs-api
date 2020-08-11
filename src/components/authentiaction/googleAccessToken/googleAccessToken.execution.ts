import {
  getGoogleAccessToken,
  getGoogleUserInfo,
} from "services/authentiactions/googleAuthentiactions";
import {
  createAndReturnUser,
  findByEmailAndReturnUser,
} from "core/repositories/users";
import log from "lib/log";

export async function googleAccessTokenExecution(
  code: string,
): Promise<string> {
  log.execution("googleAccessToken");

  const result = await getGoogleAccessToken(code);

  const googleUser = await getGoogleUserInfo(
    result.data.token_type,
    result.data.access_token,
  );

  const { email, name, email_verified, picture: avatar } = googleUser.data;

  if (!email_verified) {
    throw new Error("Email is not verfied.");
  }

  let user = await findByEmailAndReturnUser(email);

  if (user === null) {
    user = await createAndReturnUser({
      email,
      name,
      avatar,
    });
  }

  return user.id;
}
