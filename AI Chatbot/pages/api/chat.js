// pages/api/chat.js
import { connectToDatabase } from '@/lib/mongodb';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { messages } = req.body;
  const { db } = await connectToDatabase();

  try {
    // 1. Check if this is a simple platform question
    const platformResponse = await handlePlatformQuery(messages[messages.length - 1].content, db, session.user);
    if (platformResponse) {
      await saveChatHistory(db, session.user.id, messages, platformResponse);
      return res.status(200).json({ message: platformResponse });
    }

    // 2. If not a platform question, call AI service
    const aiResponse = await callAIService(messages, session.user);
    await saveChatHistory(db, session.user.id, messages, aiResponse);
    
    return res.status(200).json({ message: aiResponse });
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ message: 'Sorry, I encountered an error. Please try again.' });
  }
}

async function handlePlatformQuery(query, db, user) {
  const platformKeywords = {
    'dashboard': 'You can access your dashboard by clicking on your profile picture in the top right corner.',
    'enroll': 'To enroll in a course, go to the course page and click the "Enroll Now" button.',
    'progress': 'Your course progress is tracked automatically and can be viewed in your dashboard.',
    'certificate': 'Certificates are generated automatically when you complete all modules and quizzes in a course.',
    // Add more platform-specific responses
  };

  const matchedKeyword = Object.keys(platformKeywords).find(keyword => 
    query.toLowerCase().includes(keyword)
  );

  if (matchedKeyword) {
    return platformKeywords[matchedKeyword];
  }

  // Check if query is about a specific course
  const courseMatch = query.match(/course (.+)/i);
  if (courseMatch) {
    const courseName = courseMatch[1];
    const course = await db.collection('courses').findOne({
      title: { $regex: new RegExp(courseName, 'i') }
    });

    if (course) {
      return `The course "${course.title}" is about ${course.description}. It has ${course.modules.length} modules and takes approximately ${course.duration} to complete.`;
    }
  }

  return null;
}

async function callAIService(messages, user) {
  // In a real implementation, you would call your AI service here
  // This is a mock implementation for demonstration
  
  const lastMessage = messages[messages.length - 1].content;
  
  // Mock responses based on query
  if (lastMessage.includes('help')) {
    return "I can help you with navigating the platform, understanding course content, and answering questions about your progress.";
  }
  
  if (lastMessage.includes('quiz')) {
    return "Quizzes are designed to test your understanding of the course material. You can find them at the end of each module.";
  }
  
  // Default response
  return "I'm here to assist with your learning journey on Chergy Learn. Could you please clarify your question?";
}

async function saveChatHistory(db, userId, messages, response) {
  await db.collection('chat_history').insertOne({
    userId,
    conversation: [...messages, { role: 'assistant', content: response }],
    timestamp: new Date()
  });
}