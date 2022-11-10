require('dotenv').config();
// se leen todas la variables de entorno con dotenv y se manejara este objeto config por toda la app
const config = {
    port: process.env.PORT || 3000,
    dbUrl:process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    placesKey : process.env.PLACES_KEY,
    geocodingKey:process.env.GEOCODING_KEY
  }
  
  module.exports = { config };