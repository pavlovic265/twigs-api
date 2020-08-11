import Ajv from "ajv";

import { labelSchema } from "core/validations/labelSchema";
import { ValidationObject } from "core/validations";
import { AddLabel } from "core/dto";

const ajv = new Ajv();

const addLabelSchema = {
  maxProperties: 2,
  required: ["value", "color"],
  properties: {
    value: labelSchema.value,
    color: labelSchema.color,
  },
};

const key = "addLabel";
const ajvAddLabelSchema = ajv.addSchema(addLabelSchema, key);

interface ValidationData {
  label: AddLabel;
}

export function addLabelValidation(data: ValidationData): ValidationObject {
  const valid = ajvAddLabelSchema.validate(key, data.label);

  return {
    valid: valid,
    errors: ajv.errors,
  };
}
