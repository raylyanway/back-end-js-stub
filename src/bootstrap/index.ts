import { Express } from "express";

import { db } from "./db";
import { prod } from "./prod";
import { routes } from "./routes";

export { logger } from "./logging";

export const bootstrap = (app: Express) => {
  routes(app);
  db();
  prod(app);
};
