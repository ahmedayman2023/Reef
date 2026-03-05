import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateResidentialImages() {
  const prompts = [
    "A high-end modern luxury residential villa in Riyadh, contemporary architecture, clean lines, large windows, elegant lighting at dusk, 4k, photorealistic",
    "A modern residential apartment complex with vertical gardens and sleek balconies, contemporary urban design, sunny day, high quality, architectural photography",
    "An elegant modern townhouse with a minimalist facade, stone and wood textures, professional architectural rendering, 8k resolution",
    "A luxury residential building facade with unique geometric patterns, modern engineering, blue sky background, photorealistic, architectural masterpiece"
  ];

  const images = [];

  for (const prompt of prompts) {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "4:3",
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        images.push(`data:image/png;base64,${part.inlineData.data}`);
      }
    }
  }

  return images;
}

// This is a script to be used in the browser context or I can just generate them and hardcode them.
// Since I need to update the app, I will generate them and then update App.tsx.
// However, I can't run this script here easily and get the result back to my turn.
// I should use the image generation tool directly if available, but I have to call it via generateContent.
