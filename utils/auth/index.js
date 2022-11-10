const passport = require('passport') //passport me permite usar un conjunto de middlewares para autenticacion

const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);// le digo a passport que use las estrategias local y JWT
passport.use(JwtStrategy);

