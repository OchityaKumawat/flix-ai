import OpenAI from "openai";
const token = import.meta.env.VITE_OPENAI_KEY;

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: token,
  dangerouslyAllowBrowser: true,
});

export default openai;
