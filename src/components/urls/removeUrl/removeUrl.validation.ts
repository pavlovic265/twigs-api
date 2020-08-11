import Ajv from "ajv";
import { urlSchema } from "core/validations/urlSchema";
import { RemoveURL } from "core/dto";
import { ValidationObject } from "core/validations";

const ajv = new Ajv();

const removeUrlSchema = {
  maxProperties: 1,
  required: ["id"],
  properties: {
    id: urlSchema.id,
  },
};

const key = "removeUrl";
const ajvRemoveUrlSchema = ajv.addSchema(removeUrlSchema, key);

interface ValidationData {
  url: RemoveURL;
}
export function removeUrlValidation(data: ValidationData): ValidationObject {
  const valid = ajvRemoveUrlSchema.validate(key, data.url);

  return { valid, errors: ajv.errors };
}
