import { IWord } from "./types/word";

export const words: IWord[] = [
  {
    frequencyRating: 1,
    word: "the",
    transcription: "ðə, ði:",
    translation: "определенный артикль",
    partOfSpeech: "determiner",
    meaning:
      "denoting one or more people or things already mentioned or assumed to be common knowledge",
    meaningTranslation:
      "обозначает одного или нескольких людей или вещей, уже упомянутых или предполагаемых как общеизвестные",
    examples: [
      { sentence: "the book", translation: "книга" },
      { sentence: "the sun is shining", translation: "солнце светит" },
    ],
  },
  {
    frequencyRating: 2,
    word: "be",
    transcription: "bi:",
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
  {
    frequencyRating: 3,
    word: "to",
    transcription: "tu:, tu, tə",
    translation: "к",
    partOfSpeech: "preposition",
    meaning: "expressing motion in the direction of (a particular location)",
    meaningTranslation: "выражает движение в направлении (определенного места)",
    examples: [
      { sentence: "I went to the store", translation: "Я пошел в магазин" },
      {
        sentence: "She gave the book to me",
        translation: "Она дала мне книгу",
      },
    ],
  },
  {
    frequencyRating: 4,
    word: "of",
    transcription: "ʌv, əv, ɒv",
    translation: "из, от, о",
    partOfSpeech: "preposition",
    meaning: "expressing the relationship between a part and a whole",
    meaningTranslation: "выражает отношение между частью и целым",
    examples: [
      { sentence: "A piece of cake", translation: "Кусочек торта" },
      { sentence: "The top of the mountain", translation: "Вершина горы" },
    ],
  },
  {
    frequencyRating: 5,
    word: "and",
    transcription: "ænd",
    translation: "и",
    partOfSpeech: "conjunction",
    meaning:
      "used to connect words of the same part of speech, clauses, or sentences",
    meaningTranslation:
      "используется для соединения слов одной части речи, предложений или предложений",
    examples: [
      { sentence: "Apples and oranges", translation: "Яблоки и апельсины" },
      { sentence: "She is tall and smart", translation: "Она высокая и умная" },
    ],
  },
];
