import Joi from "joi";
import mongoose from "mongoose";

import { partOfSpeechList } from "../constants";
import { Example, Word as IWord } from "../types/word";

export const Word = mongoose.model(
  "Word",
  new mongoose.Schema({
    position: {
      type: Number,
      required: true,
      min: 1,
    },
    word: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    translation: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    partOfSpeech: {
      type: String,
      required: true,
      enum: partOfSpeechList,
    },
    meaning: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
    meaningTranslation: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
    examples: {
      type: [
        {
          sentence: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 1000,
          },
          translation: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 1000,
          },
        },
      ],
      validate: {
        validator: function (v: Example[]) {
          return v.length >= 1 && v.length <= 5; // validate that the array has at least 1 element and at most 5
        },
        message: ({ value }: { value: Example[] }) =>
          `${value.length} is not a valid number of examples`,
      },
    },
  })
);

export function validateWord(word: IWord) {
  const exampleSchema = Joi.object({
    sentence: Joi.string().required().min(1).max(1000),
    translation: Joi.string().required().min(1).max(1000),
  });
  const schema = Joi.object({
    position: Joi.number().integer().required().min(1),
    word: Joi.string().required().min(1).max(100),
    translation: Joi.string().required().min(1).max(100),
    partOfSpeech: Joi.string()
      .required()
      .valid(...partOfSpeechList),
    meaning: Joi.string().required().min(1).max(1000),
    meaningTranslation: Joi.string().required().min(1).max(1000),
    examples: Joi.array().items(exampleSchema).required().min(1).max(5),
  });
  return schema.validate(word);
}
