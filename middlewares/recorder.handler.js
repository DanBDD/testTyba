const RecordService = require('./../services/record.service');
const recordService = new RecordService()

async function createRecord(req,res,next){
    const path =req.protocol + '://' + req.get('host') + req.originalUrl
    const response = await recordService.create(path)
    next()
}



module.exports = {createRecord }
