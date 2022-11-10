const { models } = require('./../libs/sequelize');

class RecordService {
  constructor() {}

  async create(data) {
    const newRecord = await models.Record.create({path:data})
    return newRecord;
  }

  async findAll() {
    const records = await models.Record.findAll()
    return records;
  }
}

module.exports = RecordService;
