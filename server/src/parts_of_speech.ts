import { IPartOfSpeech } from "./types/part_of_speech";

export const partsOfSpeechList = [
  "adjective",
  "adverb",
  "article",
  "circumposition",
  "classifier",
  "conjunction",
  "contraction",
  "counter",
  "determiner",
  "interjection",
  "noun",
  "numeral",
  "participle",
  "particle",
  "postposition",
  "preposition",
  "pronoun",
  "pro-verb",
  "quantifier",
  "subordinating conjunction",
  "suffix",
  "superlative",
  "verb",
];

export const partsOfSpeech: IPartOfSpeech[] = [
  {
    name: "adjective",
    translation: "прилагательное",
    description: "A word that describes or modifies a noun or pronoun.",
    descriptionTranslation:
      "Слово, которое описывает или модифицирует существительное или местоимение.",
  },
  {
    name: "adverb",
    translation: "наречие",
    description:
      "A word that modifies a verb, adjective, or other adverb, indicating manner, time, place, degree, etc.",
    descriptionTranslation:
      "Слово, которое модифицирует глагол, прилагательное или другое наречие, указывая на способ, время, место, степень и т.д.",
  },
  {
    name: "article",
    translation: "артикль",
    description:
      "A word used before a noun or adjective to indicate its definiteness or indefiniteness.",
    descriptionTranslation:
      "Слово, используемое перед существительным или прилагательным для указания его определенности или неопределенности.",
  },
  {
    name: "circumposition",
    translation: "окружность",
    description:
      "A multi-word preposition, consisting of two or more words that together function as a single preposition.",
    descriptionTranslation:
      "Многокомпонентный предлог, состоящий из двух или более слов, которые вместе функционируют как один предлог.",
  },
  {
    name: "classifier",
    translation: "классификатор",
    description:
      "A word or affix used to classify nouns according to their meaning or to indicate the quantity or number of nouns.",
    descriptionTranslation:
      "Слово или аффикс, используемый для классификации существительных по их значению или для указания количества или числа существительных.",
  },
  {
    name: "conjunction",
    translation: "союз",
    description: "A word used to connect words, phrases, or clauses.",
    descriptionTranslation:
      "Слово, используемое для связи слов, фраз или предложений.",
  },
  {
    name: "contraction",
    translation: "контракт",
    description:
      "A shortened form of a word or group of words created by omitting one or more letters.",
    descriptionTranslation:
      "Сокращенная форма слова или группы слов, созданная путем опускания одной или нескольких букв.",
  },
  {
    name: "counter",
    translation: "счетчик",
    description: "A word used to indicate the number or quantity of nouns.",
    descriptionTranslation:
      "Слово, используемое для указания количества или числа существительных.",
  },
  {
    name: "determiner",
    translation: "определитель",
    description:
      "A word used before a noun to indicate its definiteness or indefiniteness, or to specify which noun is being referred to.",
    descriptionTranslation:
      "Слово, используемое перед существительным, чтобы указать его определенность или неопределенность или указать, на какое существительное ссылается данное слово.",
  },
  {
    name: "interjection",
    translation: "междометие",
    description:
      "A word or phrase that expresses strong emotion or surprise and is typically used as an exclamation.",
    descriptionTranslation:
      "Слово или фраза, которая выражает сильную эмоцию или удивление и обычно используется в качестве восклицания.",
  },
  {
    name: "noun",
    translation: "существительное",
    description: "A word that names a person, place, thing, idea, or quality.",
    descriptionTranslation:
      "Слово, которое обозначает имя, место, предмет, идею или качество.",
  },
  {
    name: "numeral",
    translation: "числительное",
    description: "A word used to express a number or quantity.",
    descriptionTranslation:
      "Слово, используемое для выражения числа или количества.",
  },
  {
    name: "participle",
    translation: "причастие",
    description:
      "A form of a verb that can function as an adjective or as a verb in combination with an auxiliary verb.",
    descriptionTranslation:
      "Форма глагола, которая может функционировать как прилагательное или как глагол в сочетании с вспомогательным глаголом.",
  },
  {
    name: "particle",
    translation: "частица",
    description:
      "A word that does not change its form but has a grammatical or semantic function.",
    descriptionTranslation:
      "Слово, которое не изменяет свою форму, но имеет грамматическую или семантическую функцию.",
  },
  {
    name: "postposition",
    translation: "постпозиция",
    description:
      "A word or particle that is placed after the noun or pronoun it modifies or governs.",
    descriptionTranslation:
      "Слово или частица, которая ставится после существительного или местоимения, которое она модифицирует или управляет.",
  },
  {
    name: "preposition",
    translation: "предлог",
    description:
      "A word used before a noun, pronoun, or gerund to show its relationship to another word in the sentence.",
    descriptionTranslation:
      "Слово, используемое перед существительным, местоимением или герундием, чтобы показать его отношение к другому слову в предложении.",
  },
  {
    name: "pronoun",
    translation: "местоимение",
    description:
      "A word that is used in place of a noun to avoid repeating the noun.",
    descriptionTranslation:
      "Слово, которое используется вместо существительного, чтобы избежать повторения существительного.",
  },
  {
    name: "pro-verb",
    translation: "место",
    description:
      "A word that stands in for a verb phrase, usually to avoid repetition.",
    descriptionTranslation:
      "Слово, которое заменяет глагольную фразу, обычно чтобы избежать повторения.",
  },
  {
    name: "quantifier",
    translation: "количественное определение",
    description:
      "A word or phrase that expresses quantity, such as 'some', 'many', or 'few'.",
    descriptionTranslation:
      "Слово или фраза, которые выражают количество, такие как 'несколько', 'много' или 'немного'.",
  },
  {
    name: "subordinating conjunction",
    translation: "подчинительный союз",
    description:
      "A word or phrase that connects a subordinate clause to a main clause, such as 'because', 'although', or 'if'.",
    descriptionTranslation:
      "Слово или фраза, которые соединяют подчинительное предложение с главным предложением, такие как 'потому что', 'хотя' или 'если'.",
  },
  {
    name: "suffix",
    translation: "суффикс",
    description:
      "A morpheme that is added to the end of a word to change its meaning or function.",
    descriptionTranslation:
      "Морфема, которая добавляется в конец слова, чтобы изменить его значение или функцию.",
  },
  {
    name: "superlative",
    translation: "превосходная степень",
    description:
      "A form of an adjective or adverb indicating the greatest degree of the quality they describe.",
    descriptionTranslation:
      "Форма прилагательного или наречия, указывающая на наибольшую степень качества, которое они описывают.",
  },
  {
    name: "verb",
    translation: "глагол",
    description:
      "A word that expresses an action, occurrence, or state of being.",
    descriptionTranslation:
      "Слово, которое выражает действие, происшествие или состояние.",
  },
];
