const express = require('express');

const UserService = require('../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {createRecord} = require('./../middlewares/recorder.handler');
const {createUserSchema } = require('../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.post('/',
createRecord,
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;

