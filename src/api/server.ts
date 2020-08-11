import { Application } from "express";

import registerMidleware from "api/middleware";
import registerRoutes from "api/routes";
import databaseConnection from "core/mongo/connection";
import { initializeEnvironmentVariables } from "config/env";
import registerErrorHandler from "api/middleware/errors";

import log from "lib/log";

export default async function setUpServer(app: Application): Promise<void> {
  try {
    // Load env varibales
    await initializeEnvironmentVariables();

    // Connect to DB
    databaseConnection();

    // Middlewares
    registerMidleware(app);

    // Routes
    registerRoutes(app);

    // Errors
    registerErrorHandler(app);
  } catch (err) {
    log.error(err.message);
    console.error(err);
  }
}
