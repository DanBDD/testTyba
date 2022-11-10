const { Model, DataTypes, Sequelize } = require('sequelize');

const RECORD_TABLE = 'records';

const RecordSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  path: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

class Record extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECORD_TABLE,
      modelName: 'Record',
      timestamps: false
    }
  }
}


module.exports = { RECORD_TABLE, RecordSchema, Record }
