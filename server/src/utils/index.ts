import { PartOfSpeech } from "../models/part_of_speech";
import { Word } from "../models/word";
import { IPartOfSpeech } from "../types/part_of_speech";
import { IWord } from "../types/word";

export const addPartsOfSpeechToDatabase = (partOfSpeeches: IPartOfSpeech[]) => {
  partOfSpeeches.forEach(async (partOfSpeech) => {
    const model = new PartOfSpeech(partOfSpeech);

    await model.save();
  });
  console.log("Parts of speech added to database!");
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

function findWords(text: string) {
  return text.match(/\w+/g) ?? [];
}

function findPunctuation(text: string) {
  return text.match(/\W/g) ?? [];
}

function getAlignWords(words: string[]) {
  return words.map((w) => w.toLowerCase());
}

function getCountItems(items: string[]) {
  const uniqItems = Array.from(new Set(items));

  return uniqItems.map((uniqItem) => ({
    item: uniqItem,
    count: items.filter((item) => item === uniqItem).length,
  }));
}

function getStat(
  text: string,
  parser: (text: string) => string[],
  modifier?: (items: string[]) => string[]
) {
  const items = parser(text);
  const modifiedItems = modifier?.(items) ?? [];
  const countItems = getCountItems(items);
  const countModifiedItems = getCountItems(modifiedItems);

  return { text, items, modifiedItems, countItems, countModifiedItems };
}
