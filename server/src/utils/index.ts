import { PartOfSpeech } from "../models/part_of_speech";
import { Word } from "../models/word";
import { Word as IWord } from "../types/word";

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

export const addWordsToDatabase = async (words: IWord[]) => {
  for (let i = 0; i < words.length; i++) {
    const word = new Word(words[i]);
    await word.save();
  }
  console.log("Words added to database!");
};
