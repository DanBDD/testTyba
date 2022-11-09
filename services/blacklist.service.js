const { models } = require('./../libs/sequelize');
const bcrypt = require('bcrypt')

class BlackListService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data,5); // se le aplica hash 5 veces para guardarlo en le bd
    const newItem = await models.Blacklist.create({token:hash})
    return newItem;
  }
  async findOne(token){
    const hash = await bcrypt.hash(token,5); // se le aplica hash 5 veces para compararlo con el de la bd
    const item = await models.Blacklist.findOne({
      where:{token:hash}
    })
    return item
  }
}

module.exports = BlackListService;
