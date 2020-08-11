import { attachErrorHandler } from "api/middleware/errors";

import { googleAuthorizationPageAction } from "components/authentiaction/googleAuthorization/googleAuthorization.action";

export default [attachErrorHandler(googleAuthorizationPageAction)];
