const express = require('express');
const router = express.Router();
const User = require('../models/User');
const axios = require('axios');
const config = require('../config');

// Get personalized recommendations
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Get Coursera recommendations (simplified example)
    const courses = await getCourseraRecommendations(user.personalityType);
    
    // Get opportunity matches
    const opportunities = await getOpportunityMatches(user.skills);

    res.json({
      user: {
        personalityType: user.personalityType,
        points: user.points,
        badges: user.badges
      },
      courses,
      opportunities
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
});

// Example Coursera API integration
async function getCourseraRecommendations(personalityType) {
  // In a real implementation, this would call Coursera's API
  const courseCategories = {
    Analyst: ['data-science', 'programming', 'mathematics'],
    Diplomat: ['psychology', 'communication', 'leadership'],
    Sentinel: ['business', 'project-management', 'finance'],
    Explorer: ['arts', 'design', 'music']
  };

  return {
    recommended: courseCategories[personalityType]?.map(category => ({
      title: `${category.replace('-', ' ')} course`,
      provider: 'Coursera',
      url: `https://www.coursera.org/search?query=${category}`,
      skillMatch: 'High'
    })) || [],
    popular: [
      {
        title: "Machine Learning",
        provider: "Stanford University",
        url: "https://www.coursera.org/learn/machine-learning",
        skillMatch: "Medium"
      }
    ]
  };
}

// Example opportunity matching
async function getOpportunityMatches(skills) {
  // In a real implementation, this would call scholarship/job APIs
  return [
    {
      type: 'Internship',
      title: 'Software Development Intern',
      company: 'Tech Corp',
      matchScore: '85%',
      url: '#'
    },
    {
      type: 'Scholarship',
      title: 'STEM Excellence Scholarship',
      provider: 'Education Foundation',
      matchScore: '78%',
      url: '#'
    }
  ];
}

module.exports = router;