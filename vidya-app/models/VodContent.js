const mongoose = require('mongoose');

const vodContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  url: {
    type: String,
    required: true
  },
  thumbnail: String,
  duration: Number, // in minutes
  categories: [String],
  skillLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  personalityTypes: [String], // MBTI types this content is good for
  relatedSkills: [String],
  pointsReward: {
    type: Number,
    default: 10
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add text index for search
vodContentSchema.index({
  title: 'text',
  description: 'text', 
  categories: 'text',
  relatedSkills: 'text'
});

module.exports = mongoose.model('VodContent', vodContentSchema);