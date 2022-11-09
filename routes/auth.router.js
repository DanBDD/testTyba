const express = require('express');
const passport = require('passport');

const AuthService = require('./../services/auth.service');

const router = express.Router();
const service = new AuthService();

router.post('/login',
  passport.authenticate('local', {session: false}), //capa de autenticacion usando la estrategia local
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/logout',
  passport.authenticate('jwt', {session: false}),//capa de autenticacion usando la estrategia jwt
  async (req, res, next) => {
    try {
      const bearer = req.headers.authorization;
      const token = bearer.split(' ')[1];
      const response = service.logout(token)
      res.json({message:response});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
