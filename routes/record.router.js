const express = require('express');

const RecordService = require('../services/record.service');

const router = express.Router();
const service = new RecordService();

router.get('/',
  async (req, res, next) => {
    try {
      const records = await service.findAll();
      res.status(201).json(records);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;

