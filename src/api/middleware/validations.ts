import {
  NextFunction,
  Request,
  Response,
  RequestHandler,
  ErrorRequestHandler,
} from "express";
import log from "lib/log";

function validationBody(
  validation: Function,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  log.middleware(validation.name, "Validation - ");

  const { valid, errors } = validation(req.body);

  if (!valid) {
    res.status(422).send(errors);
  } else {
    next();
  }
}

export function attachValidationBody(
  callback: Function,
): ErrorRequestHandler | RequestHandler {
  return validationBody.bind(null, callback);
}

function validationParmas(
  validation: Function,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  log.middleware(validation.name, "Validation - ");

  const { valid, errors } = validation(req.params);

  if (!valid) {
    res.status(422).send(errors);
  } else {
    next();
  }
}

export function attachValidationParmas(callback: Function): any {
  return validationParmas.bind(null, callback);
}
