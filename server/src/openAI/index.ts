import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function collect() {
  // export default async function (req, res) {
  // if (!configuration.apiKey) {
  //   res.status(500).json({
  //     error: {
  //       message: "OpenAI API key not configured, please follow instructions in README.md",
  //     }
  //   });
  //   return;
  // }

  // const animal = req.body.animal || '';
  // if (animal.trim().length === 0) {
  //   res.status(400).json({
  //     error: {
  //       message: "Please enter a valid animal",
  //     }
  //   });
  //   return;
  // }
  console.log(888, process.env.OPENAI_API_KEY);

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(),
      temperature: 0.6,
    });
    console.log(44, completion);
    console.log(55, completion.data.choices[0].text);
    return completion.data.choices[0].text;
    // res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    console.log(22, error);
    // Consider adjusting the error handling logic for your use case
    // if (error.response) {
    //   console.error(error.response.status, error.response.data);
    //   res.status(error.response.status).json(error.response.data);
    // } else {
    //   console.error(`Error with OpenAI API request: ${error.message}`);
    //   res.status(500).json({
    //     error: {
    //       message: 'An error occurred during your request.',
    //     }
    //   });
    // }
  }
}

function generatePrompt() {
  return `Give me an array with 1 the most frequent English word using json format with this structure:
  [{
    frequencyRating: 2,
    word: "be",
    transcription: "bi:",
    translation: "быть",
    partOfSpeech: "verb",
    meaning: "exist or occur; take place",
    meaningTranslation: "существовать или происходить; происходить",
    examples: [
      { sentence: "I am a student", translation: "Я студент" },
      { sentence: "This event will be held tomorrow", translation: "Это мероприятие состоится завтра" }
    ]
    }]`;
}
