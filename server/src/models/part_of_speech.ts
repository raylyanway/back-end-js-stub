import Joi from "joi";
import mongoose from "mongoose";

import { IPartOfSpeech } from "../types/part_of_speech";

export const PartOfSpeech = mongoose.model(
  "part_of_speech",
  new mongoose.Schema<IPartOfSpeech>({
    name: {
      type: String,
      minlength: 1,
      maxlength: 100,
      required: true,
    },
    translation: {
      type: String,
      minlength: 1,
      maxlength: 100,
      required: true,
    },
    description: {
      type: String,
      minlength: 1,
      maxlength: 1000,
      required: true,
    },
    descriptionTranslation: {
      type: String,
      minlength: 1,
      maxlength: 1000,
      required: true,
    },
  })
);

export const validate = (customer: IPartOfSpeech) => {
  const schema = Joi.object<IPartOfSpeech>({
    name: Joi.string().min(1).max(100).required(),
    translation: Joi.string().min(1).max(100).required(),
    description: Joi.string().min(1).max(1000).required(),
    descriptionTranslation: Joi.string().min(1).max(1000).required(),
  });

  return schema.validate(customer);
};
