const API_KEY = 'sk-ciajddearsqdpovtantbwbchipvuhdhrhytnzhyahzthrmlu';
const API_URL = 'https://api.siliconflow.cn/v1/chat/completions';

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  response: string;
}

export const sendMessage = async (messages: Message[]): Promise<ChatResponse> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-ai/DeepSeek-V2.5',
        messages: [
          {
            role: 'system',
            content: `You are a helpful customer service assistant for Néoloom, a company that specializes in smart denim products. 
            You should be friendly, professional, and knowledgeable about our products including:
            - Smart Belt
            - Temperature-Control Jeans
            - Digital Twin technology
            
            Always maintain a helpful and courteous tone while providing accurate information about our products and services.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from LLM');
    }

    const data = await response.json();
    return {
      response: data.choices[0].message.content
    };
  } catch (error) {
    console.error('Error in sendMessage:', error);
    throw error;
  }
}; 