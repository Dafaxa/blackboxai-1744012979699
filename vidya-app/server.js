require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const assessmentRoutes = require('./routes/assessment');
const recommendationRoutes = require('./routes/recommendations');
const opportunityRoutes = require('./routes/opportunities');
const gamificationRoutes = require('./routes/gamification');
const vodRoutes = require('./routes/vod');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/assessment', assessmentRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/opportunities', opportunityRoutes);
app.use('/api/gamification', gamificationRoutes);
app.use('/api/vod', vodRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML views
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/assessment', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'assessment.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});