const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config');
const User = require('../models/User');

// Get matching opportunities
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Get opportunities from various sources
    const scholarships = await getScholarships(user.skills);
    const jobs = await getJobs(user.skills);
    const internships = await getInternships(user.skills);

    res.json({
      scholarships,
      jobs,
      internships
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get opportunities' });
  }
});

// Example scholarship matching
async function getScholarships(skills) {
  // In a real implementation, this would call scholarship APIs
  return [
    {
      id: 'sch001',
      title: 'STEM Excellence Scholarship',
      provider: 'Education Foundation',
      deadline: '2023-12-31',
      amount: '$5,000',
      matchScore: calculateMatchScore(skills, ['math', 'science', 'technology']),
      url: 'https://example.com/scholarships/stem'
    },
    {
      id: 'sch002',
      title: 'Creative Arts Grant',
      provider: 'Arts Council',
      deadline: '2023-11-15',
      amount: '$3,000',
      matchScore: calculateMatchScore(skills, ['art', 'design', 'creativity']),
      url: 'https://example.com/scholarships/arts'
    }
  ];
}

// Example job matching
async function getJobs(skills) {
  // In a real implementation, this would call job APIs
  return [
    {
      id: 'job001',
      title: 'Junior Software Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      type: 'Full-time',
      matchScore: calculateMatchScore(skills, ['programming', 'algorithms', 'problem-solving']),
      url: 'https://example.com/jobs/software-dev'
    }
  ];
}

// Example internship matching
async function getInternships(skills) {
  // In a real implementation, this would call internship APIs
  return [
    {
      id: 'int001',
      title: 'Data Science Intern',
      company: 'Data Analytics Co.',
      location: 'New York, NY',
      duration: '3 months',
      matchScore: calculateMatchScore(skills, ['data-analysis', 'statistics', 'python']),
      url: 'https://example.com/internships/data-science'
    }
  ];
}

// Simple matching algorithm (would be replaced with ML model)
function calculateMatchScore(userSkills, requiredSkills) {
  if (!userSkills || userSkills.length === 0) return '0%';
  
  const userSkillNames = userSkills.map(s => s.name.toLowerCase());
  const matches = requiredSkills.filter(skill => 
    userSkillNames.includes(skill.toLowerCase())
  ).length;

  const percentage = Math.min(
    Math.round((matches / requiredSkills.length) * 100),
    95 // Cap at 95% to allow for better matches
  );

  return `${percentage}%`;
}

module.exports = router;