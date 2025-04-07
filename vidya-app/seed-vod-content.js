const VodContent = require('./models/VodContent');

const sampleContent = [
  {
    title: 'Discovering Your Creative Potential',
    description: 'Learn how to unlock your creative skills and apply them in various fields',
    url: 'https://example.com/vods/creative-potential',
    thumbnail: 'https://example.com/thumbs/creative-potential.jpg',
    duration: 15,
    categories: ['Creativity', 'Self-Discovery'],
    personalityTypes: ['ENFP', 'INFP', 'ENFJ'],
    relatedSkills: ['Creative Thinking', 'Brainstorming'],
    pointsReward: 15
  },
  {
    title: 'Logical Problem Solving Techniques',
    description: 'Master structured approaches to solving complex problems',
    url: 'https://example.com/vods/logical-problem-solving',
    thumbnail: 'https://example.com/thumbs/logical-problem-solving.jpg', 
    duration: 20,
    categories: ['Problem Solving', 'Analytical Skills'],
    personalityTypes: ['INTJ', 'INTP', 'ENTJ'],
    relatedSkills: ['Critical Thinking', 'Analysis'],
    pointsReward: 20
  },
  {
    title: 'Effective Communication Skills',
    description: 'Improve your interpersonal communication abilities',
    url: 'https://example.com/vods/communication-skills',
    thumbnail: 'https://example.com/thumbs/communication-skills.jpg',
    duration: 18,
    categories: ['Communication', 'Soft Skills'],
    personalityTypes: ['ESFJ', 'ENFJ', 'ESTJ'],
    relatedSkills: ['Public Speaking', 'Active Listening'],
    pointsReward: 15
  }
];

async function seedVodContent() {
  try {
    const count = await VodContent.countDocuments();
    if (count === 0) {
      await VodContent.insertMany(sampleContent);
      console.log('VOD content seeded successfully');
    } else {
      console.log('VOD content already exists');
    }
  } catch (error) {
    console.error('Error seeding VOD content:', error);
  }
}

module.exports = seedVodContent;