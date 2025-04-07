const VodContent = require('../models/VodContent');
const User = require('../models/User');
const GamificationService = require('./gamification');

class VodRecommender {
  static async getRecommendations(userId) {
    try {
      const user = await User.findById(userId);
      if (!user) return [];

      // Base query filters
      const query = {
        $or: []
      };

      // Add personality type filter if available
      if (user.personalityType) {
        query.$or.push({ personalityTypes: user.personalityType });
      }

      // Add skill-based filter if user has skills
      if (user.skills?.length > 0) {
        query.$or.push({
          relatedSkills: {
            $in: user.skills.map(s => s.name)
          }
        });
      }

      // If no specific filters, return popular content
      if (query.$or.length === 0) {
        return await VodContent.find()
          .sort({ pointsReward: -1 })
          .limit(5);
      }

      // Get personalized recommendations
      const recommended = await VodContent.find(query)
        .sort({ pointsReward: -1 })
        .limit(5);

      // If not enough personalized results, mix with popular content
      if (recommended.length < 5) {
        const popular = await VodContent.find({
          _id: { $nin: recommended.map(r => r._id) }
        })
        .sort({ pointsReward: -1 })
        .limit(5 - recommended.length);

        return [...recommended, ...popular];
      }

      return recommended;
    } catch (error) {
      console.error('Recommendation error:', error);
      return [];
    }
  }

  static async recordCompletion(userId, vodId) {
    try {
      const [vod, user] = await Promise.all([
        VodContent.findById(vodId),
        User.findById(userId)
      ]);

      if (!vod || !user) return null;

      // Check if already completed
      const alreadyCompleted = user.completedContent?.some(
        c => c.contentId.toString() === vodId
      );
      if (alreadyCompleted) return user;

      // Update user record
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { 
          $inc: { points: vod.pointsReward },
          $push: { 
            completedContent: {
              contentId: vodId,
              completedAt: new Date(),
              pointsEarned: vod.pointsReward
            }
          } 
        },
        { new: true }
      );

      // Check for gamification triggers
      await GamificationService.awardBadge(userId, 'Video Learner');
      
      // Check for challenge completion
      await GamificationService.completeChallenge(userId, 'complete_vod');
      
      // Update leaderboard
      await GamificationService.updateLeaderboard();

      return updatedUser;
    } catch (error) {
      console.error('Completion recording error:', error);
      return null;
    }
  }

  static async getWatchHistory(userId) {
    try {
      const user = await User.findById(userId)
        .populate('completedContent.contentId')
        .select('completedContent');

      return user?.completedContent || [];
    } catch (error) {
      console.error('Error getting watch history:', error);
      return [];
    }
  }
}

module.exports = VodRecommender;