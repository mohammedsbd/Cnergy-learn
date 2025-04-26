// lib/aiService.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getAIResponse(messages, userContext) {
  try {
    // Format messages for OpenAI
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // Add system message with context about the platform
    const systemMessage = {
      role: 'system',
      content: `You are an assistant for Chergy Learn, an e-learning platform. 
      Students can enroll in courses, complete lessons and quizzes, and earn certificates.
      Instructors can create and manage courses.
      
      Current user context:
      - Name: ${userContext.name || 'Not available'}
      - Email: ${userContext.email || 'Not available'}
      - Role: ${userContext.role || 'Not available'}
      
      Be helpful, concise, and focus on educational content. 
      If asked about platform features, explain how to use them.
      If asked about course content, provide explanations but don't give away quiz answers.
      `
    };

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...formattedMessages],
      temperature: 0.7,
      max_tokens: 150,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('AI service error:', error);
    return "I'm having trouble connecting to the AI service. Please try again later.";
  }
}