const bcrypt = require('bcrypt')

const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password,5);
    const newUser = await models.User.create({
      ...data,
      password:hash
    });
    delete newUser.dataValues.password
    return newUser;
  }

  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: {email}
    });
    return rta;
  }
}

module.exports = UserService;
