import authenticate from "api/middleware/authenticate";
import { attachErrorHandler } from "api/middleware/errors";
import { attachValidationBody } from "api/middleware/validations";

import { updateLabelAction } from "components/labels/updateLabel/updateLabel.action";
import { updateLabelValidation } from "components/labels/updateLabel/updateLabel.validation";

export default [
  attachValidationBody(updateLabelValidation),
  authenticate,
  attachErrorHandler(updateLabelAction),
];
