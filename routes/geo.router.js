const express = require('express');
const passport=require('passport')

const GeoService = require('../services/geo.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {getGeoSchema } = require('../schemas/geo.schema');
const {checkBlacklist} = require('./../middlewares/auth.handler');

const router = express.Router();
const service = new GeoService();

router.post('/restaurants',
passport.authenticate('jwt',{session:false}), //valido el JWT
checkBlacklist, //valido que no este en blacklist
  validatorHandler(getGeoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const restaurants = await service.findRestaurants(body);
      res.status(200).json({restaurants});
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;

