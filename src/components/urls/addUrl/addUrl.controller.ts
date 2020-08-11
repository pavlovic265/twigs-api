import authenticate from "api/middleware/authenticate";
import { attachErrorHandler } from "api/middleware/errors";
import { attachValidationBody } from "api/middleware/validations";

import { addUrlAction } from "components/urls/addUrl/addUrl.action";
import { addUrlValidation } from "components/urls/addUrl/addUrl.validation";

export default [
  attachValidationBody(addUrlValidation),
  authenticate,
  attachErrorHandler(addUrlAction),
];
