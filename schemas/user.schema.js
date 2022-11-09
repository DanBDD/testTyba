const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(4);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

module.exports = { createUserSchema}
