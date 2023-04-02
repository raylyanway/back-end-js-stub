import cors from "cors";
import express, { Express } from "express";
import path from "path";

import error from "../middleware/error";
import partOfSpeech from "../routes/part_of_speech";

export const routes = (app: Express) => {
  app.use(cors());
  app.use(express.static(path.resolve(__dirname, "../../../client/build")));
  app.use(express.json());
  app.use("/api/part-of-speech", partOfSpeech);
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../../../client/build", "index.html")
    );
  });
  app.use(error);
};
