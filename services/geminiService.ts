import { GoogleGenAI } from "@google/genai";
import { AiRecommendation } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getDestinationAdvice = async (location: string, hotelName: string): Promise<AiRecommendation> => {
  if (!apiKey) {
    // Fallback if no API key is present
    return {
      summary: "Experience the local culture and vibrant atmosphere tailored just for you.",
      highlights: ["Local Cuisine", "Historic Landmarks", "Modern Amenities"],
      bestFor: "Relaxation & Exploration"
    };
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      I am considering staying at ${hotelName} in ${location}.
      Provide a concise travel summary in JSON format.
      Do not include markdown code blocks.
      Return exactly this structure:
      {
        "summary": "A 1-sentence catchy overview of why this location is great.",
        "highlights": ["highlight 1", "highlight 2", "highlight 3"],
        "bestFor": "Type of traveler (e.g., Couples, Business, Adventure)"
      }
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    const text = response.text || '';
    // Basic cleanup to ensure we get valid JSON even if model chats a bit
    const jsonStr = text.replace(/```json|```/g, '').trim();
    
    return JSON.parse(jsonStr) as AiRecommendation;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      summary: `Discover the beauty of ${location} with a stay at ${hotelName}.`,
      highlights: ["Central Location", "Top Rated Service", "Exclusive Access"],
      bestFor: "Discerning Travelers"
    };
  }
};