import { Application } from "express";

import authentiactionRouter from "api/routes/authentiaction";
import labelsRouter from "api/routes/labelsRoute";
import urlRouter from "api/routes/urlRoute";

export default function registerRoutes(app: Application): void {
  app.use("/auth", authentiactionRouter);
  app.use("/labels", labelsRouter);
  app.use("/urls", urlRouter);
}
