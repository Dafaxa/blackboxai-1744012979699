const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { personalityQuestions } = require('../assessment-questions');

// Get assessment questions
router.get('/questions', (req, res) => {
  res.json({ questions: personalityQuestions });
});

// Submit assessment results
router.post('/submit', async (req, res) => {
  try {
    const { userId, answers } = req.body;
    
    // Calculate personality type (simplified example)
    const personalityType = calculatePersonalityType(answers);
    
    // Update user profile
    await User.findByIdAndUpdate(userId, { 
      personalityType,
      $inc: { points: 50 } // Award points
    });

    res.json({ 
      personalityType,
      pointsAwarded: 50,
      message: 'Assessment completed successfully!'
    });
  } catch (error) {
    res.status(500).json({ error: 'Assessment submission failed' });
  }
});

// Simple personality type calculation (would be replaced with actual ML model)
function calculatePersonalityType(answers) {
  const types = ['Analyst', 'Diplomat', 'Sentinel', 'Explorer'];
  const scores = [0, 0, 0, 0];
  
  answers.forEach((answer, index) => {
    scores[index % 4] += answer.value;
  });

  const maxScore = Math.max(...scores);
  return types[scores.indexOf(maxScore)];
}

module.exports = router;