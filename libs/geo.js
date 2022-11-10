const { config } = require('../config/config');
const axios= require('axios');
const boom = require('@hapi/boom');
class Geo{
    constructor(){}
    async findByCiudad(city){
        try {
            const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}&type=restaurant&key=${config.placesKey}`)
            const info=data.results
            let restaurantsNames=[]
            for (let i = 0; i < info.length; i++) {
              restaurantsNames.push(info[i].name)
          }
             return restaurantsNames
            } 
          catch (err) {
           throw boom.internal()
         }
    }
    async findByCoordenadas(latitud,longitud){
        try {
            const {data} = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitud},${longitud}&key=${config.geocodingKey}`)
            let city=''
            data.results[0].address_components.forEach(element => {
              if(element.types.includes('locality')){
                city = element.long_name
              }
            });
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}&type=restaurant&key=${config.placesKey}`)
            let restaurantsNames=[]
            const info =response.data.results
            for (let i = 0; i < info.length; i++) {
              restaurantsNames.push(info[i].name)
            }

            return restaurantsNames            } 
          catch (err) {
            console.log(err)
            throw boom.internal()
        }
    }
}

module.exports=Geo