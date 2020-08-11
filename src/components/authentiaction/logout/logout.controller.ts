import authenticate from "api/middleware/authenticate";
import { attachErrorHandler } from "api/middleware/errors";

import { logoutAction } from "components/authentiaction/logout/logout.actions";

export default [authenticate, attachErrorHandler(logoutAction)];
