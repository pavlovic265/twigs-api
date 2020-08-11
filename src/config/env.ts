import dotenv, { DotenvParseOutput, DotenvConfigOutput } from "dotenv";

interface Vars extends DotenvParseOutput {
  PORT: string;
  MONGO_DB_URI: string;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_REDIRECT_URI: string;
  JWT_SECRET: string;
  WEB_APP_URL: string;
}

const vars: Vars = {
  PORT: process.env.PORT || "",
  MONGO_DB_URI: process.env.MONGO_DB_URI || "",
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || "",
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET || "",
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
  GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI || "",
  JWT_SECRET: process.env.JWT_SECRET || "",
  WEB_APP_URL: process.env.WEB_APP_URL || "",
};

function loadVariables(): Promise<void> {
  const config: DotenvConfigOutput = dotenv.config();

  if (config.error) {
    console.error(`Error ${config.error}`);
  }

  if (!config.parsed) {
    console.error("Invalied ENV config");
  }

  if (config.parsed) {
    Object.assign(vars, config.parsed);
  }
  return Promise.resolve();
}

export function initializeEnvironmentVariables(): Promise<void> {
  return loadVariables();
}

export default { vars };
