import { collect } from "./openAI";
import { partsOfSpeech } from "./parts_of_speech";
import { translate } from "./translator";
import { addPartsOfSpeechToDatabase, addWordsToDatabase } from "./utils";
import { words } from "./words";

async function App() {
  // const text =
  //   "Learn English with our free online listening, grammar, vocabulary and reading activities. Practice your English and get ready for your Cambridge English exam.";
  // const wordsStat = getStat(text, findWords, getAlignWords);
  // const punctuationStat = getStat(text, findPunctuation);

  // const translatedText = await translate(text, {
  //   from: "en",
  //   to: "ru",
  // });

  // getPartsOfSpeech().forEach(({ name, description }) => {
  //   addPartOfSpeech(name, description);
  // });

  addPartsOfSpeechToDatabase(partsOfSpeech);
  addWordsToDatabase(words);

  // console.log({ wordsStat, punctuationStat, translatedText });

  // const partsOfSpeech = getPartsOfSpeech();
  // console.log(partsOfSpeech);
  // const partsOfSpeech = collect();
  // console.log(partsOfSpeech);
}

export default App;
