export interface Example {
  sentence: string;
  translation: string;
}

export interface Word {
  position: number;
  word: string;
  translation: string;
  partOfSpeech: string;
  meaning: string;
  meaningTranslation: string;
  examples: Example[];
}
