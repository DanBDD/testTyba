const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(4);

const createUserSchema = Joi.object({
  email: email.required(), //obligatorio para crear el usuario
  password: password.required(), //obligatorio para crear el usuario
});

module.exports = { createUserSchema}
