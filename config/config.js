require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    dbUrl:process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    placesKey : process.env.PLACES_KEY,
    geocodingKey:process.env.GEOCODING_KEY
  }
  
  module.exports = { config };