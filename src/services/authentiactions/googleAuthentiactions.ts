import axios, { AxiosResponse } from "axios";
import env from "config/env";
import log from "lib/log";

interface GoogleAccessTokenBody {
  client_id: string;
  client_secret: string;
  code: string;
  redirect_uri: string;
  grant_type: string;
}

export function getGoogleAccessToken(code: string): Promise<AxiosResponse> {
  log.service("getGoogleAccessToken");
  const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
  } = env.vars;

  const body: GoogleAccessTokenBody = {
    ["client_id"]: GOOGLE_CLIENT_ID,
    ["client_secret"]: GOOGLE_CLIENT_SECRET,
    ["redirect_uri"]: GOOGLE_REDIRECT_URI,
    ["code"]: code,
    ["grant_type"]: "authorization_code",
  };

  return axios.post("https://oauth2.googleapis.com/token", body, {
    headers: { Accept: "application/json" },
  });
}

export function getGoogleUserInfo(
  tokenType: string,
  accessToken: string,
): Promise<AxiosResponse> {
  log.service("getGoogleUserInfo");
  return axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: { Authorization: `${tokenType} ${accessToken}` },
  });
}
