import { PartOfSpeech } from "../models/part_of_speech";

export const addPartOfSpeech = async (name: string, description: string) => {
  const partOfSpeech = new PartOfSpeech({
    name,
    description,
  });

  return await partOfSpeech.save();
};

export const getPartsOfSpeech = async () => {
  return await PartOfSpeech.find({});
};
