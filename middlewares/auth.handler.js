const boom = require('@hapi/boom');

const BlackListService = require('./../services/blacklist.service');
const blackListService = new BlackListService()

async function checkBlacklist(req,res,next){
  const token=req.headers.authorization.split(' ')[1]
  const item = await blackListService.findOne(token)
  console.log(item)
  if (item!==null){
    next(boom.unauthorized()) //ejecuta el proximo middleware de error
  }
  next() //ejecuta el proximo middleware
}



module.exports = {checkBlacklist }
