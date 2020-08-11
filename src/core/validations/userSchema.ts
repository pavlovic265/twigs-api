import { labelSchema } from "core/validations/labelSchema";

export const urlSchema = {
  id: { type: "string", format: "uuid" },
  href: { type: "string", format: "uri" },
  title: { type: "string", minLength: 0 },
  labels: { type: "array", items: [labelSchema] },
};
