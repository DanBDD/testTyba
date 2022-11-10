const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { config } = require('./../config/config');
const UserService = require('./user.service');
const userService = new UserService();

const BlackListService = require('./blacklist.service')
const blackListService = new BlackListService()
class AuthService {

  async getUser(email, password) {
    const user = await userService.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();;
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id
    }
    const token = jwt.sign(payload, config.jwtSecret,{expiresIn:'7d'});
    return {
      user,
      token
    };
  }
  logout(data){
    const response = blackListService.create(data)
    return response
  }
}
module.exports = AuthService;
