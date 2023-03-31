import debug from "debug";
import express from "express";

import { bootstrap, logger } from "./bootstrap";
import draft from "./draft";

const app = express();
// bootstrap();
bootstrap(app);

// const devDebug = debug("app:dev");
// devDebug("Dev is started");

const port = process.env.NODE_ENV === "test" ? 0 : process.env.PORT || 5000;
export const server = app.listen(port, () =>
  logger.info(`Listening on port ${port}...`)
);

// draft();