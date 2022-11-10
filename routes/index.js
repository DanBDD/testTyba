const express = require('express');

const usersRouter = require('./user.router');
const authRouter = require('./auth.router');
const geoRouter = require('./geo.router');
const recordRouter = require('./record.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users' ,usersRouter);
  router.use('/auth',authRouter);
  router.use('/geo', geoRouter);
  router.use('/records', recordRouter);
}

module.exports = routerApi;
