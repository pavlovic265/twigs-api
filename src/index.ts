import express from "express";

import setUpServer from "api/server";
import env from "config/env";
import log from "lib/log";

const app = express();

// Setting up server
setUpServer(app);

// Starting the server
app.listen(env.vars.PORT, function server() {
  log.config(`listening on port ${env.vars.PORT}`);
});
