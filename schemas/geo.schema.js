const Joi = require('joi');

const latitud = Joi.number();
const longitud = Joi.number();
const ciudad = Joi.string();

const getGeoSchema = Joi.object({
  latitud, 
  longitud: Joi.when('latitud',{
    is: Joi.exist(),
    then: longitud.required() //solo si latitud existe longitud es requerida
  }),
  ciudad //optional
});

module.exports = { getGeoSchema}
