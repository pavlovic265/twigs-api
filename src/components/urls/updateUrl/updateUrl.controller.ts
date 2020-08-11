import authenticate from "api/middleware/authenticate";
import { attachErrorHandler } from "api/middleware/errors";
import { attachValidationBody } from "api/middleware/validations";

import { updateUrlAction } from "components/urls/updateUrl/updateUrl.action";
import { updateUrlValidation } from "components/urls/updateUrl/updateUrl.validation";

export default [
  attachValidationBody(updateUrlValidation),
  authenticate,
  attachErrorHandler(updateUrlAction),
];
