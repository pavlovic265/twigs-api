import authenticate from "api/middleware/authenticate";
import { attachErrorHandler } from "api/middleware/errors";

import { userInfoAction } from "components/authentiaction/userInfo/userInfo.action";

export default [authenticate, attachErrorHandler(userInfoAction)];
