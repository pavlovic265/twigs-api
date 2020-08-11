import Ajv from "ajv";
import { urlSchema } from "core/validations/urlSchema";
import { UpdateURL } from "core/dto";
import { ValidationObject } from "core/validations";

const ajv = new Ajv();

const updateUrlSchema = {
  maxProperties: 4,
  required: ["id", "href", "labels", "title"],
  properties: {
    id: urlSchema.id,
    href: urlSchema.href,
    labels: urlSchema.labels,
    title: urlSchema.title,
  },
};

const key = "updateUrl";
const ajvUpdateUrlSchema = ajv.addSchema(updateUrlSchema, key);

interface ValidationData {
  url: UpdateURL;
}
export function updateUrlValidation(data: ValidationData): ValidationObject {
  const valid = ajvUpdateUrlSchema.validate(key, data.url);

  return { valid, errors: ajv.errors };
}
