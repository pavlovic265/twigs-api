import { attachErrorHandler } from "api/middleware/errors";

import { googleAccessTokenAction } from "components/authentiaction/googleAccessToken/googleAccessToken.action";

export default [attachErrorHandler(googleAccessTokenAction)];
