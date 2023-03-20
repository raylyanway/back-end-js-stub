import express, { Express } from "express";

import error from "../middleware/error";

export const routes = (app: Express) => {
  app.use(express.json());
  app.use(error);
};
