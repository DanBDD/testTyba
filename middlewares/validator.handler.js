const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));//ejecuta el proximo middleware de error
    }
    next();//ejecuta el proximo middleware
  }
}

module.exports = validatorHandler;
