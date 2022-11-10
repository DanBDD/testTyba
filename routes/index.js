const express = require('express');

const usersRouter = require('./user.router');
const authRouter = require('./auth.router');
const geoRouter = require('./geo.router');
const recordRouter = require('./record.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users' ,usersRouter);//route para el dominio de users
  router.use('/auth',authRouter);//route para el dominio de auth
  router.use('/geo', geoRouter);//route para el dominio de geo
  router.use('/records', recordRouter);//route para el dominio de records
}

module.exports = routerApi;
