import authenticate from "api/middleware/authenticate";
import { attachErrorHandler } from "api/middleware/errors";
import { attachValidationBody } from "api/middleware/validations";

import { removeUrlAction } from "components/urls/removeUrl/removeUrl.action";
import { removeUrlValidation } from "components/urls/removeUrl/removeUrl.validation";

export default [
  attachValidationBody(removeUrlValidation),
  authenticate,
  attachErrorHandler(removeUrlAction),
];
