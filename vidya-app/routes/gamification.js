const express = require('express');
const router = express.Router();
const GamificationService = require('../services/gamification');
const User = require('../models/User');
const badgesConfig = require('../gamification-badges');

// Get user gamification profile
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check for new badges earned
    const newBadges = badgesConfig.badges.filter(badge => 
      badge.criteria(user) && !user.badges.some(b => b.name === badge.name)
    );

    if (newBadges.length > 0) {
      for (const badge of newBadges) {
        await GamificationService.awardBadge(user._id, badge.name);
      }
    }

    const updatedUser = await User.findById(user._id);

    res.json({
      points: updatedUser.points,
      badges: updatedUser.badges,
      streak: updatedUser.streak.current,
      leaderboardPosition: updatedUser.leaderboardPosition,
      challenges: badgesConfig.challenges.map(challenge => ({
        ...challenge,
        completed: updatedUser.challenges.some(c => 
          c.challengeId === challenge.id && c.completed
        )
      }))
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get gamification data' });
  }
});

// Award points
router.post('/award-points', async (req, res) => {
  try {
    const { userId, points } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { points } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update leaderboard when points change
    await GamificationService.updateLeaderboard();

    res.json({ points: user.points });
  } catch (error) {
    res.status(500).json({ error: 'Failed to award points' });
  }
});

// Complete challenge
router.post('/complete-challenge', async (req, res) => {
  try {
    const { userId, challengeId } = req.body;
    const challenge = badgesConfig.challenges.find(c => c.id === challengeId);

    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    const user = await GamificationService.completeChallenge(userId, challengeId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Award challenge points
    await User.findByIdAndUpdate(
      userId,
      { $inc: { points: challenge.reward } },
      { new: true }
    );

    // Update leaderboard
    await GamificationService.updateLeaderboard();

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to complete challenge' });
  }
});

// Get leaderboard
router.get('/leaderboard/top', async (req, res) => {
  try {
    const topUsers = await User.find()
      .sort({ points: -1 })
      .limit(10)
      .select('points badges streak leaderboardPosition');

    res.json(topUsers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get leaderboard' });
  }
});

// Update activity streak
router.post('/update-streak', async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await GamificationService.updateStreak(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ streak: user.streak.current });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update streak' });
  }
});

module.exports = router;