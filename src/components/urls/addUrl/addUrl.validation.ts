import Ajv from "ajv";
import { urlSchema } from "core/validations/urlSchema";
import { AddURL } from "core/dto";
import { ValidationObject } from "core/validations";

const ajv = new Ajv();

const addUrlSchema = {
  maxProperties: 3,
  required: ["href", "labels", "title"],
  properties: {
    href: urlSchema.href,
    labels: urlSchema.labels,
    title: urlSchema.title,
  },
};

const key = "addUrl";
const ajvAddUrlSchema = ajv.addSchema(addUrlSchema, key);

interface ValidationData {
  url: AddURL;
}
export function addUrlValidation(data: ValidationData): ValidationObject {
  const valid = ajvAddUrlSchema.validate(key, data.url);

  return { valid, errors: ajv.errors };
}
