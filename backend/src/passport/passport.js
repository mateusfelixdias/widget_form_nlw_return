const configToken = require('../authenticationAndAuthorizationAtTheBakery/token/config/config');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const { gerente } = require('../database/modelsTables');
const { Strategy, ExtractJwt } = passportJwt;

module.exports = app => {
    const params = {
        secretOrKey: configToken.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    };

    const strategy = new Strategy(params, ( data, done ) => {
        gerente.findOne( { where: data.id  } )
            .then( user => done( null, user ? { ...data } : false ))
            .catch( error => done( error, false ) );
    });

    passport.use(strategy);

    return {
        authenticase: () => passport.authenticate( 'jwt', { session: false } )
    };
};
