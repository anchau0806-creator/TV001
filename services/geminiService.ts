import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import type { DrawnCard, UserInfo, Language, Skin, AssistantMessage, Settings, AssistantStyle } from '../types';

if (!process.env.API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this environment, we assume the key is set.
  console.warn("API_KEY environment variable not set. Using a placeholder.");
  process.env.API_KEY = "YOUR_API_KEY_HERE";
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const calculateAge = (dob: string): number => {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export const generateInterpretation = async (
  cards: DrawnCard[],
  topic: string,
  userInfo: UserInfo,
  language: Language,
  settings: Settings,
): Promise<string> => {
  const cardList = cards
    .map((c) => `${c.card.name[language]}${c.isReversed ? ' (reversed)' : ''}`)
    .join(', ');

  const age = calculateAge(userInfo.dob);
  
  const styleInstruction = settings.readingStyle.length > 0
    ? `The reading must also be particularly ${settings.readingStyle.join(' and ')}.`
    : '';

  const prompt = `
    You are an expert tarot reader. Provide a thoughtful, encouraging, and insightful tarot reading.
    
    User Information:
    - Name: ${userInfo.name}
    - Age: ${age}
    - Gender: ${userInfo.gender}

    Reading Details:
    - Topic/Question: ${topic}
    - Cards Drawn: ${cardList}

    Instructions:
    1.  Analyze the meaning of each card, considering if it is upright or reversed.
    2.  Synthesize the meanings of the cards together to form a coherent narrative that directly addresses the user's topic.
    3.  Structure the reading into a few paragraphs. Start with an overall summary, then delve into the details, and conclude with advice or a final thought.
    4.  The tone should be supportive and empowering, even when delivering challenging news. ${styleInstruction}
    5.  The entire response must be in ${language === 'vi' ? 'Vietnamese' : 'English'}.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: settings.readingModel,
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating interpretation:", error);
    throw error;
  }
};


export const generateCardImage = async (cardName: string, skin: Skin): Promise<string> => {
    const prompt = `Tarot card art for "${cardName}". Style: ${skin.description.en}. Clean, high-quality, digital illustration, vibrant colors, detailed.`;
    
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '4:3',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            return response.generatedImages[0].image.imageBytes;
        }
        throw new Error("No image generated");

    } catch (error) {
        console.error("Error generating image:", error);
        // Return a placeholder or throw the error
        throw error;
    }
};

export const generateNewTarotFacts = async (previousFacts: string[], language: Language): Promise<string[]> => {
    const langInstruction = language === 'vi' ? 'Vietnamese' : 'English';
    const prompt = `You are a Tarot expert and historian. Generate exactly 5 new, interesting, and little-known facts about Tarot. The facts must be suitable for a general audience. The entire response must be in ${langInstruction}. CRITICAL: The facts you generate MUST NOT be the same as or similar in meaning to any of the following facts that have been shown to the user recently: \n\n- ${previousFacts.join('\n- ')}\n\n. Return the result as a JSON object matching the provided schema.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        facts: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                                description: "An interesting fact about Tarot.",
                            },
                            description: "An array of 5 interesting Tarot facts.",
                        },
                    },
                    required: ['facts'],
                },
            },
        });

        const jsonStr = response.text.trim();
        const result = JSON.parse(jsonStr);

        if (result.facts && Array.isArray(result.facts) && result.facts.length > 0) {
            return result.facts.slice(0, 5); // Ensure we only return 5 facts
        }
        
        throw new Error("Invalid or empty facts array in API response.");

    } catch (error) {
        console.error("Error generating new Tarot facts:", error);
        throw error;
    }
};

const getStyleInstruction = (style: AssistantStyle, language: Language): string => {
    if (typeof style === 'object' && style.custom) {
        if (language === 'vi') {
            return `Hãy nhập vai với phong cách sau: "${style.custom}".`;
        }
        return `Adopt the following persona: "${style.custom}".`;
    }

    if (language === 'vi') {
        switch (style) {
            case 'anh': return "Xưng hô với người dùng là 'em' và thể hiện giọng điệu của một người anh trai thân thiện, chững chạc.";
            case 'chi': return "Xưng hô với người dùng là 'em' và thể hiện giọng điệu của một người chị gái thân thiện, chững chạc.";
            case 'em': return "Xưng hô với người dùng là 'anh' hoặc 'chị' (tùy ngữ cảnh) và thể hiện giọng điệu của một người em tôn trọng.";
            case 'ban': return "Xưng hô với người dùng là 'bạn' và duy trì giọng điệu thân thiện, ngang hàng.";
            case 'default':
            default: return "Duy trì giọng điệu khôn ngoan, trung lập và hữu ích.";
        }
    } else { // English
        switch (style) {
            case 'anh': return "Adopt a friendly, mature, older brotherly tone.";
            case 'chi': return "Adopt a friendly, mature, older sisterly tone.";
            case 'em': return "Adopt a respectful, younger sibling tone.";
            case 'ban': return "Maintain a friendly, peer-to-peer tone.";
            case 'default':
            default: return "Maintain a wise, neutral, and helpful tone.";
        }
    }
};


export const getAssistantResponse = async (
  history: AssistantMessage[],
  language: Language,
  settings: Settings
): Promise<string> => {
  const langInstruction = language === 'vi' ? 'Tiếng Việt' : 'English';
  const styleInstruction = getStyleInstruction(settings.assistantStyle, language);
  
  let systemInstruction: string;

  if (language === 'vi') {
      systemInstruction = `Bạn là 'SAGE', một trợ lý AI Tarot thông thái, thân thiện và sâu sắc cho ứng dụng 'Tarot4u'. Mục đích của bạn là giúp người dùng hiểu về Tarot và ứng dụng. ${styleInstruction}

    Kiến thức của bạn bao gồm:
    1. Ý nghĩa của tất cả 78 lá bài Tarot (Bộ Ẩn Chính và Bộ Ẩn Phụ), cả xuôi và ngược.
    2. Lịch sử của Tarot.
    3. Các kiểu trải bài phổ biến như trải 1 lá, 3 lá, và 5 lá.
    4. Các tính năng của ứng dụng này, chẳng hạn như thay đổi giao diện lá bài, xem lịch sử xem bài, và thực hiện một lần xem bài mới.

    Quy tắc:
    - LUÔN LUÔN trả lời bằng ${langInstruction}.
    - Ngắn gọn và rõ ràng. Sử dụng markdown để định dạng nếu nó giúp dễ đọc (ví dụ: danh sách, chữ in đậm).
    - Khi được hỏi về một lá bài, hãy cung cấp ý nghĩa cốt lõi của nó.
    - TUYỆT ĐỐI KHÔNG tự mình thực hiện một lần xem bài Tarot. Nếu người dùng yêu cầu xem bài hoặc lời khuyên cá nhân, hãy nhẹ nhàng hướng dẫn họ sử dụng tính năng "Xem Bài Tarot" của ứng dụng. Ví dụ, hãy nói: "Đó là một câu hỏi rất hay để khám phá. Tôi khuyên bạn nên sử dụng tính năng 'Xem Bài Tarot' để có một lượt giải bài được cá nhân hóa về chủ đề đó."
    - Giữ câu trả lời tương đối ngắn và mang tính trò chuyện.
    - Nếu bạn không biết câu trả lời, hãy nói như vậy một cách lịch sự.`;
  } else {
      systemInstruction = `You are 'SAGE', a wise, friendly, and insightful AI Tarot assistant for the 'Tarot4u' application. Your purpose is to help users understand Tarot and the app. ${styleInstruction}

    Your knowledge base includes:
    1. The meanings of all 78 Tarot cards (Major and Minor Arcana), both upright and reversed.
    2. The history of Tarot.
    3. Common Tarot spreads like the 1-card, 3-card, and 5-card spreads.
    4. The features of this application, such as changing card skins, viewing reading history, and getting a new reading.

    Rules:
    - ALWAYS respond in ${langInstruction}.
    - Be concise and clear. Use markdown for formatting if it helps readability (e.g., lists, bold text).
    - When asked about a card, provide its core meaning.
    - NEVER conduct a Tarot reading yourself. If a user asks for a reading or personal advice, gently guide them to use the "Read Tarot" feature of the app. For example, say "That's a great question to explore. I recommend using the 'Read Tarot' feature for a personalized reading on that topic."
    - Keep responses relatively short and conversational.
    - If you don't know the answer, say so politely.`;
  }


  try {
    const contents = history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }]
    }));

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: settings.assistantModel,
        contents: contents,
        config: {
            systemInstruction: systemInstruction
        }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating assistant response:", error);
    throw error;
  }
};