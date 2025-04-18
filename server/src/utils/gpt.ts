import OpenAI from 'openai';
import dotenv from "dotenv";

dotenv.config();

async function generatedText(prompt: string) {

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  

  const res = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "...",
    max_tokens: 300,
  });
  
  res.choices[0].text;
}

export {generatedText};