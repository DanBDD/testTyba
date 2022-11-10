const Joi = require('joi');

const latitud = Joi.number();
const longitud = Joi.number();
const ciudad = Joi.string();

const getGeoSchema = Joi.object({
  latitud,
  longitud: Joi.when('latitud',{
    is: Joi.exist(),
    then: longitud.required()
  }),
  ciudad
});

module.exports = { getGeoSchema}
