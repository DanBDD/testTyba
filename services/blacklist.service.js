const { models } = require('./../libs/sequelize');
const bcrypt = require('bcrypt')

class BlackListService {
  constructor() {}

  async create(token) {
    const newItem = await models.Blacklist.create({token})
    return newItem;
  }
  async findOne(token){
    const item = await models.Blacklist.findOne({
      where:{token}
    })
    return item
  }
}

module.exports = BlackListService;
