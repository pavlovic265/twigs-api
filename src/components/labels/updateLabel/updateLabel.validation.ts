import Ajv from "ajv";

import { labelSchema } from "core/validations/labelSchema";
import { UpdateLabel } from "core/dto";
import { ValidationObject } from "core/validations";

const ajv = new Ajv();

const updateLabelSchema = {
  maxProperties: 3,
  required: ["value", "color", "id"],
  properties: {
    id: labelSchema.id,
    color: labelSchema.color,
    value: labelSchema.value,
  },
};

const key = "updateLabel";
const ajvUpdateLabellSchema = ajv.addSchema(updateLabelSchema, key);

interface ValidationData {
  label: UpdateLabel;
}

export function updateLabelValidation(data: ValidationData): ValidationObject {
  const valid = ajvUpdateLabellSchema.validate(key, data.label);

  return { valid, errors: ajv.errors };
}
