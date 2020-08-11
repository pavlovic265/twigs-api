import jwt from "jsonwebtoken";

import env from "config/env";
import log from "lib/log";

export function encodeJWT(id: string): Promise<string> {
  log.lib("jwt - encodeJWT");
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        data: { id },
      },
      env.vars.JWT_SECRET,
      function (err: Error, token: string) {
        if (err) {
          reject("Error generating JWT token");
        }
        resolve(token);
      },
    );
  });
}

export function decodeJWT(token: string): Promise<object | string> {
  log.lib("jwt - decodeJWT");
  return new Promise((resolve, reject) => {
    jwt.verify(token, env.vars.JWT_SECRET, function (err, decoded) {
      if (err) {
        reject("Error verifing JWT token");
      }
      resolve(decoded);
    });
  });
}
