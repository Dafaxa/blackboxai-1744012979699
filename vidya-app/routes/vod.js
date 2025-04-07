const express = require('express');
const router = express.Router();
const VodRecommender = require('../services/vodRecommender');
const VodContent = require('../models/VodContent');
const { checkAuth } = require('../middleware/auth');

// Get personalized VOD recommendations
router.get('/recommendations', checkAuth, async (req, res) => {
  try {
    const recommendations = await VodRecommender.getRecommendations(req.user.id);
    res.json(recommendations);
  } catch (error) {
    console.error('Recommendation error:', error);
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
});

// Record VOD completion and award points
router.post('/:id/complete', checkAuth, async (req, res) => {
  try {
    const result = await VodRecommender.recordCompletion(
      req.user.id, 
      req.params.id
    );
    
    if (!result) {
      return res.status(404).json({ error: 'VOD content not found' });
    }

    res.json({ 
      pointsAwarded: result.points,
      message: 'VOD completion recorded'
    });
  } catch (error) {
    console.error('Completion error:', error);
    res.status(500).json({ error: 'Failed to record completion' });
  }
});

// Get user's watch history
router.get('/history', checkAuth, async (req, res) => {
  try {
    const history = await VodRecommender.getWatchHistory(req.user.id);
    res.json(history);
  } catch (error) {
    console.error('History error:', error);
    res.status(500).json({ error: 'Failed to get watch history' });
  }
});

// Search VOD content
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.length < 2) {
      return res.status(400).json({ error: 'Search query too short' });
    }

    const results = await VodContent.find(
      { $text: { $search: q } },
      { score: { $meta: 'textScore' } }
    )
    .sort({ score: { $meta: 'textScore' } })
    .limit(10);

    res.json(results);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

// Get VOD details
router.get('/:id', async (req, res) => {
  try {
    const vod = await VodContent.findById(req.params.id);
    if (!vod) {
      return res.status(404).json({ error: 'VOD content not found' });
    }
    res.json(vod);
  } catch (error) {
    console.error('VOD fetch error:', error);
    res.status(500).json({ error: 'Failed to get VOD content' });
  }
});

module.exports = router;