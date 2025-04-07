module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/vidya',
  COURSERA_API_KEY: process.env.COURSERA_API_KEY,
  LINKEDIN_API_KEY: process.env.LINKEDIN_API_KEY,
  SCHOLARSHIP_API_KEY: process.env.SCHOLARSHIP_API_KEY
};