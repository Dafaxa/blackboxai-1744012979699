module.exports = {
  badges: [
    {
      name: 'Fast Learner',
      description: 'Completed 3 lessons in one day',
      criteria: (user) => {
        // Implementation would check user activity
        return false;
      }
    },
    {
      name: 'Streak Starter',
      description: '3-day activity streak',
      criteria: (user) => user.streak.current >= 3
    },
    {
      name: 'Challenge Master',
      description: 'Completed 5 challenges',
      criteria: (user) => user.challenges.filter(c => c.completed).length >= 5
    },
    {
      name: 'Top Performer',
      description: 'Reached top 10 on leaderboard',
      criteria: (user) => user.leaderboardPosition <= 10
    },
    {
      name: 'Assessment Ace',
      description: 'Completed personality assessment',
      criteria: (user) => user.personalityType !== null
    },
    {
      name: 'Skill Builder',
      description: 'Added 3 skills to profile',
      criteria: (user) => user.skills.length >= 3
    },
    {
      name: 'Opportunity Seeker',
      description: 'Applied to 3 opportunities',
      criteria: (user) => {
        // Would track opportunity applications
        return false;
      }
    },
    {
      name: 'Weekend Warrior',
      description: 'Active on both weekend days',
      criteria: (user) => {
        // Would check weekend activity
        return false;
      }
    }
  ],
  challenges: [
    {
      id: 'daily_login',
      name: 'Daily Login',
      description: 'Log in for 5 consecutive days',
      reward: 100
    },
    {
      id: 'complete_assessment',
      name: 'Self-Discovery',
      description: 'Complete your personality assessment',
      reward: 50
    },
    {
      id: 'add_skills',
      name: 'Skill Collector',
      description: 'Add 5 skills to your profile',
      reward: 75
    }
  ]
};