const { Model, DataTypes } = require('sequelize');

const BLACKLIST_TABLE = 'blacklist';

const BlacklistSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  token: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  }
}

class Blacklist extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BLACKLIST_TABLE,
      modelName: 'Blacklist',
      timestamps: false
    }
  }
}


module.exports = { BLACKLIST_TABLE, BlacklistSchema, Blacklist }
