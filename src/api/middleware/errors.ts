import {
  Application,
  Request,
  Response,
  NextFunction,
  RequestHandler,
  ErrorRequestHandler,
} from "express";
import log from "lib/log";

async function errorHandler(
  callback: RequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await callback(req, res, next);
  } catch (err) {
    next(err.message);
  }
}

export function attachErrorHandler(
  callback: RequestHandler,
): RequestHandler | ErrorRequestHandler {
  return errorHandler.bind(null, callback);
}

function handleErrors(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  log.error(err);

  res.status(500).send({ message: err });
}

export default function registerErrorHandler(app: Application) {
  app.use(handleErrors);
}
