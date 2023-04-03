import { collect } from "./collector";
import { translate } from "./translator";
import { addPartOfSpeech, addWordsToDatabase } from "./utils";

async function App() {
  const text =
    "Learn English with our free online listening, grammar, vocabulary and reading activities. Practice your English and get ready for your Cambridge English exam.";
  const wordsStat = getStat(text, findWords, getAlignWords);
  const punctuationStat = getStat(text, findPunctuation);

  // const translatedText = await translate(text, {
  //   from: "en",
  //   to: "ru",
  // });

  // getPartsOfSpeech().forEach(({ name, description }) => {
  //   addPartOfSpeech(name, description);
  // });

  const words = [
    {
      position: 2,
      word: "be",
      translation: "быть",
      partOfSpeech: "verb",
      meaning: "exist or occur; take place",
      meaningTranslation: "существовать или происходить; происходить",
      examples: [
        { sentence: "I am a student", translation: "Я студент" },
        {
          sentence: "This event will be held tomorrow",
          translation: "Это мероприятие состоится завтра",
        },
      ],
    },
    // Add more words here
  ];

  // addWordsToDatabase(words);

  // console.log({ wordsStat, punctuationStat, translatedText });

  // const partsOfSpeech = getPartsOfSpeech();
  // console.log(partsOfSpeech);
  const partsOfSpeech = collect();
  console.log(partsOfSpeech);
}

export default App;

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

function getPartsOfSpeech() {
  return [
    {
      name: "noun",
      description: "A noun is the name of a person, place, thing, or idea.",
    },
    {
      name: "pronoun",
      description: "A pronoun is a word used in place of a noun.",
    },
    { name: "verb", description: "A verb expresses action or being." },
    {
      name: "adjective",
      description: "An adjective modifies or describes a noun or pronoun.",
    },
    {
      name: "adverb",
      description:
        "An adverb modifies or describes a verb, an adjective, or another adverb.",
    },
    {
      name: "preposition",
      description:
        "A preposition is a word placed before a noun or pronoun to form a phrase modifying another word in the sentence.",
    },
    {
      name: "conjunction",
      description: "A conjunction joins words, phrases, or clauses.",
    },
    {
      name: "interjection",
      description: "An interjection is a word used to express emotion.",
    },
  ];
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
