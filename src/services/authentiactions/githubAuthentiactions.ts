import axios, { AxiosResponse } from "axios";
import env from "config/env";
import log from "lib/log";

interface GithubAccessTokenBody {
  client_id: string;
  client_secret: string;
  code: string;
}

export function getGithubAccessToken(code: string): Promise<AxiosResponse> {
  log.service("getGithubAccessToken");
  const body: GithubAccessTokenBody = {
    ["client_id"]: env.vars.GITHUB_CLIENT_ID,
    ["client_secret"]: env.vars.GITHUB_CLIENT_SECRET,
    ["code"]: code,
  };

  return axios.post("https://github.com/login/oauth/access_token", body, {
    headers: { Accept: "application/json" },
  });
}

export function getGithubUserInfo(accessToken: string): Promise<AxiosResponse> {
  log.service("getGithubUserInfo");
  return axios.get("https://api.github.com/user", {
    headers: { Authorization: `token ${accessToken}` },
  });
}
