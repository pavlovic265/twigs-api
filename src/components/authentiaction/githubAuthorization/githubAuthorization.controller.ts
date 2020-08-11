import { attachErrorHandler } from "api/middleware/errors";

import { githubAuthorizationPageAction } from "components/authentiaction/githubAuthorization/githubAuthorization.action";

export default [attachErrorHandler(githubAuthorizationPageAction)];
