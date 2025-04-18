import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const HF_API_URL = 'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta';

async function generateText(prompt: string): Promise<string> {
  try {
    const res = await axios.post(
      HF_API_URL,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000,
      }
    );

    console.log("🪄 HF Response:", res.data);
    const output = Array.isArray(res.data)
      ? res.data[0]?.generated_text || ""
      : res.data?.generated_text || "";

    return output;
  } catch (err: any) {
    console.error("❌ Hugging Face Error:", err?.response?.data || err.message);
    throw new Error("Hugging Face API request failed");
  }
}

export { generateText };
