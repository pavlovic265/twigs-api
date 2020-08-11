import { ErrorObject } from "ajv";

export interface ValidationObject {
  valid: boolean | PromiseLike<any>;
  errors: ErrorObject[] | null | undefined;
}
