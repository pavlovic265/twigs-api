import authenticate from "api/middleware/authenticate";
import { attachErrorHandler } from "api/middleware/errors";
import { attachValidationParmas } from "api/middleware/validations";

import { removeLabelAction } from "components/labels/removeLabel/removeLabel.action";
import { removeLabelValidation } from "components/labels/removeLabel/removeLabel.validation";

export default [
  attachValidationParmas(removeLabelValidation),
  authenticate,
  attachErrorHandler(removeLabelAction),
];
