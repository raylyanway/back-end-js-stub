export interface IExample {
  sentence: string;
  translation: string;
}

export interface IWord {
  frequencyRating: number;
  word: string;
  transcription: string;
  translation: string;
  partOfSpeech: string;
  meaning: string;
  meaningTranslation: string;
  examples: IExample[];
}
