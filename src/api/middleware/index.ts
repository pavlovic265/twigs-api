import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import env from "config/env";

// import errorHandler from "api/middleware/errorHandler";

export default function registerMidleware(app: Application): void {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(cookieParser());
  app.use(compression());
  app.use(helmet());

  app.use(cors({ credentials: true, origin: env.vars.WEB_APP_URL }));

  app.use(morgan("tiny"));
}
