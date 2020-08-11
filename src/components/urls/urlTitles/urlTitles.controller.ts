import authenticate from "api/middleware/authenticate";
import { attachErrorHandler } from "api/middleware/errors";

import { urlTitlesAction } from "components/urls/urlTitles/urlTitles.action";

export default [authenticate, attachErrorHandler(urlTitlesAction)];
