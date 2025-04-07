const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  personalityType: {
    type: String,
    enum: ['Analyst', 'Diplomat', 'Sentinel', 'Explorer', null],
    default: null
  },
  skills: [{
    name: String,
    level: {
      type: Number,
      min: 1,
      max: 5,
      default: 1
    }
  }],
  points: {
    type: Number,
    default: 0
  },
  badges: [{
    name: String,
    dateEarned: {
      type: Date,
      default: Date.now
    }
  }],
  challenges: [{
    challengeId: String,
    completed: Boolean,
    completionDate: Date
  }],
  streak: {
    current: {
      type: Number,
      default: 0
    },
    lastActiveDate: Date
  },
  leaderboardPosition: Number,
  completedContent: [{
    contentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'VodContent'
    },
    completedAt: {
      type: Date,
      default: Date.now
    },
    pointsEarned: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);