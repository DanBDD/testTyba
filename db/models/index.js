const { User, UserSchema } = require('./user.model');
const { Blacklist,BlacklistSchema } = require('./blacklist.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Blacklist.init(BlacklistSchema, Blacklist.config(sequelize));
}

module.exports = setupModels;
