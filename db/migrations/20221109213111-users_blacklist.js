'use strict';

const { BLACKLIST_TABLE, BlacklistSchema } = require('../models/blacklist.model');
const { USER_TABLE, UserSchema } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE,UserSchema)
    await queryInterface.createTable(BLACKLIST_TABLE,BlacklistSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(BLACKLIST_TABLE)
  }
};
