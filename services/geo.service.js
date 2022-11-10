const { models } = require('./../libs/sequelize');
const Geo=require('../libs/geo')
const geo = new Geo()
class GeoService {
  constructor() {}

  async findRestaurants(data) {
    const options={}
    const {latitud, longitud,ciudad} = data
    if(ciudad){
        return geo.findByCiudad(ciudad)
    }else{
        return geo.findByCoordenadas(latitud,longitud)
    }
  }

}

module.exports = GeoService;
