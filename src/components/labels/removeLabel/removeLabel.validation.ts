import Ajv from "ajv";

import { ValidationObject } from "core/validations";
import { RemoveLabel } from "core/dto";

const ajv = new Ajv();

const removeLabelSchema = {
  maxProperties: 1,
  required: ["id"],
  properties: {
    id: { type: "string", format: "uuid" },
  },
};

const key = "removeLabel";
const ajvRemoveLabelSchema = ajv.addSchema(removeLabelSchema, key);

interface ValidationData {
  label: RemoveLabel;
}

export function removeLabelValidation(data: ValidationData): ValidationObject {
  const valid = ajvRemoveLabelSchema.validate(key, data.label);

  return { valid, errors: ajv.errors };
}
