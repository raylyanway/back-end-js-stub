import express from "express";

import { PartOfSpeech } from "../models/part_of_speech";

const router = express.Router();

router.get("/", async (req, res) => {
  const partsOfSpeech = await PartOfSpeech.find().sort("name");
  res.send(partsOfSpeech);
});

export default router;
