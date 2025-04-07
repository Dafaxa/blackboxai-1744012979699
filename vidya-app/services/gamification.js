const User = require('../models/User');
const badges = require('../gamification-badges');

class GamificationService {
  static async awardBadge(userId, badgeName) {
    const user = await User.findById(userId);
    if (!user) return null;

    const badgeExists = user.badges.some(b => b.name === badgeName);
    if (!badgeExists) {
      user.badges.push({ name: badgeName });
      await user.save();
    }

    return user;
  }

  static async updateStreak(userId) {
    const user = await User.findById(userId);
    if (!user) return null;

    const today = new Date();
    const lastActive = user.streak.lastActiveDate || new Date(0);
    
    // Reset streak if more than 1 day gap
    if ((today - lastActive) > 86400000 * 1.5) {
      user.streak.current = 1;
    } else {
      user.streak.current += 1;
    }

    user.streak.lastActiveDate = today;
    await user.save();
    return user;
  }

  static async completeChallenge(userId, challengeId) {
    const user = await User.findById(userId);
    if (!user) return null;

    const existingChallenge = user.challenges.find(c => c.challengeId === challengeId);
    if (!existingChallenge) {
      user.challenges.push({
        challengeId,
        completed: true,
        completionDate: new Date()
      });
      await user.save();
    }

    return user;
  }

  static async updateLeaderboard() {
    // Update all users' positions based on points
    const users = await User.find().sort({ points: -1 });
    for (let i = 0; i < users.length; i++) {
      users[i].leaderboardPosition = i + 1;
      await users[i].save();
    }
  }
}

module.exports = GamificationService;