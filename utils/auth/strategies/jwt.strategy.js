const {Strategy, ExtractJwt}=require('passport-jwt')
const {config}= require('./../../../config/config')

const options ={
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}

const JwtStrategy = new Strategy(options,(payload,done)=>{
  //en este punto la estrategia ya hizo el verify del token y nos da el payload, la info que tiene
  return done(null,payload)
})

module.exports= JwtStrategy;
