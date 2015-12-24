module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Challenge', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    challengeInstructions: {
      type: DataTypes.TEXT('medium'),
      field: 'challenge_instructions'
    },
    challengeName: {
      type: DataTypes.STRING(50),
      field: 'challenge_name'
    },
    challengeCategory: {
      type: DataTypes.STRING(50),
      field: 'challenge_category'
    },
    challengeUnsolved: {
      type: DataTypes.TEXT('medium'),
      field: 'challenge_unsolved'
    },
    challengeSolved: {
      type: DataTypes.TEXT('medium'),
      field: 'challenge_solved'
    },
    difficultyLevel: {
      type: DataTypes.STRING(15),
      field: 'difficulty_level'
    },
    goldMedalTime: {
      type: DataTypes.DECIMAL(13, 2).UNSIGNED,
      field: 'gold_medal_time'
    },
    silverMedalTime: {
      type: DataTypes.DECIMAL(13, 2).UNSIGNED,
      field: 'silver_medal_time'
    },
    bronzeMedalTime: {
      type: DataTypes.DECIMAL(13, 2).UNSIGNED,
      field: 'bronze_medal_time'
    },
    goldKeyStrokes: {
      type: DataTypes.INTEGER(11),
      field: 'gold_key_strokes'
    },
    silverKeyStrokes: {
      type: DataTypes.INTEGER(11),
      field: 'silver_key_strokes'
    },
    bronzeKeyStrokes: {
      type: DataTypes.INTEGER(11),
      field: 'bronze_key_strokes'
    },
    numPlays: {
      type: DataTypes.INTEGER(11),
      field: 'num_plays'
    },
    numRatings: {
      type: DataTypes.INTEGER(11),
      field: 'num_ratings'
    },
    totalRatingScore: {
      type: DataTypes.DECIMAL(13, 2).UNSIGNED,,
      field: 'total_rating_score'
    },
  }, {
    underscored: true
  })
}
