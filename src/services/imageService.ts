import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getResidentialImages() {
  const prompts = [
    "Modern luxury villa in Riyadh, contemporary architecture, 4k photorealistic",
    "Contemporary residential apartment complex, sleek design, sunny day",
    "Elegant modern townhouse, minimalist facade, architectural rendering",
    "Luxury residential building facade, geometric patterns, photorealistic"
  ];
  // ...
}
