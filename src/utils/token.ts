import { Request } from "express";
import { encodeJWT, decodeJWT } from "lib/jwt";
// import { JWT_COOKIE_NAME } from "config/cookies";

interface JWTPayload {
  id: string;
}

interface DecodedJWT {
  data: JWTPayload;
}

export async function constuctJWTForResponse(userId: string) {
  const jwt = await encodeJWT(userId);
  const splited = jwt.split(".");
  return { code: splited[0], token: `${splited[1]}.${splited[2]}` };
}

export async function getJWTPayload(token: string): Promise<JWTPayload> {
  const decoded: DecodedJWT = (await decodeJWT(token)) as DecodedJWT;

  return decoded.data;
}

/**
 * NOTE-COOKIE:
 * As a temp solution I will pass jwt in url until I figure out
 * what how to pass them with cookies.
 */
export function extractJWTFromRequest(req: Request): string {
  if (!req.cookies || !req.headers.code) {
    throw new Error("User not authenticated");
  }

  const { code } = req.headers;
  // const cookieToken = req.cookies[JWT_COOKIE_NAME];

  // return `${code}.${cookieToken}`;
  return code as string;
}
