const { User, UserSchema } = require('./user.model');
const { Blacklist,BlacklistSchema } = require('./blacklist.model');
const { Record,RecordSchema } = require('./record.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Blacklist.init(BlacklistSchema, Blacklist.config(sequelize));
  Record.init(RecordSchema, Record.config(sequelize));
}

module.exports = setupModels;
