const passport = require("passport");
const passportJwt = require("passport-jwt");
const extractJwt = passportJwt.ExtractJwt;
const strategyJwt = passportJwt.Strategy;
const db = require("../models");
const User = db.users;

passport.use(
    new strategyJwt({
        jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(), 
        secretOrKey: process.env.JWT_SECRET
},
(jwtPayLoad, done) => {
    return User.findOne({where:{id : jwtPayLoad.id}}).then((user) => {
        return done(null, user);
    }).catch((err)=>{
        return done(err);
    })}
));