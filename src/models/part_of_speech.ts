import Joi from "joi";
import mongoose from "mongoose";

import { PartOfSpeech as PartOfSpeechType } from "../types/part_of_speech";

export const PartOfSpeech = mongoose.model(
  "part_of_speech",
  new mongoose.Schema({
    name: {
      type: String,
      minlength: 1,
      maxlength: 20,
      required: true,
    },
    description: {
      type: String,
      minlength: 1,
      maxlength: 250,
      required: true,
    },
  })
);

export const validate = (customer: PartOfSpeechType) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(20).required(),
    description: Joi.string().min(1).max(250).required(),
  });

  return schema.validate(customer);
};
