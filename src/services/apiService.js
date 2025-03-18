import axios from 'axios';

// Real API endpoint
const API_ENDPOINT = 'https://amranur.app.n8n.cloud/webhook/dfcb2b47-fa91-47b2-8da8-30b4490405f56';

export const fetchChatResponse = async (message) => {
  try {
    // Make the actual API call to the provided endpoint
    const response = await axios.get(`${API_ENDPOINT}?message=${encodeURIComponent(message)}`);
    const data = response.data;
    
    // Handle array response with objects inside
    if (Array.isArray(data) && data.length > 0) {
      const firstItem = data[0];
      
      // Check if the first item has an output property
      if (typeof firstItem === 'object' && firstItem.output) {
        return firstItem.output;
      }
    }
    
    // Handle object with output property
    if (data && typeof data === 'object' && data.output) {
      return data.output;
    }
    
    // If it's already a string, return it directly
    if (typeof data === 'string') {
      return data;
    }
    
    // If it's some other format, stringify it
    return JSON.stringify(data);
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to get response from API');
  }
};

// Fallback mock responses in case the API is unavailable
export const getMockResponse = (message) => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('weather')) {
    return "Currently it's 72°F (22°C) and sunny with a few clouds. The forecast shows similar conditions for the rest of the day with a slight chance of rain in the evening.";
  } else if (lowerMessage.includes('space') || lowerMessage.includes('fact')) {
    return "The largest known star, UY Scuti, is so enormous that if it replaced our Sun, its outer edge would extend beyond Jupiter's orbit!";
  } else if (lowerMessage.includes('cookie') || lowerMessage.includes('bak')) {
    return "For perfect chocolate chip cookies, use melted butter, a mix of white and brown sugar, and chill your dough for at least 24 hours before baking. This develops deeper flavors and improves texture.";
  } else if (lowerMessage.includes('tech') || lowerMessage.includes('trend')) {
    return "Recent tech trends include advancements in AI for content creation, quantum computing breakthroughs, and the rise of spatial computing with AR/VR applications becoming more mainstream.";
  } else {
    return `I received your message about "${message.slice(0, 30)}${message.length > 30 ? '...' : ''}". I'm an AI assistant here to help. What would you like to know more about?`;
  }
};
