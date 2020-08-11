import { attachErrorHandler } from "api/middleware/errors";

import { githubAccessTokenAction } from "components/authentiaction/githubAccessToken/githubAccessToken.action";

export default [attachErrorHandler(githubAccessTokenAction)];
