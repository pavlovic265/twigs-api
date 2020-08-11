import authenticate from "api/middleware/authenticate";
import { attachErrorHandler } from "api/middleware/errors";
import { attachValidationBody } from "api/middleware/validations";

import { addLabelAction } from "components/labels/addLabel/addLabel.action";
import { addLabelValidation } from "components/labels/addLabel/addLabel.validation";

export default [
  attachValidationBody(addLabelValidation),
  authenticate,
  attachErrorHandler(addLabelAction),
];
