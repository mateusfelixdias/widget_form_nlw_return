const config = require('../config/config');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');


class AuthorizationAdim {

    async authorization (req, res, next) {
        const [ , Authorization ] = req.headers.authorization.split(' ');

        if (!Authorization){
            res.status(400).send();
        };

        
        try{
            const decoded = await promisify ( jwt.verify )( Authorization, config.secret );

            if ( decoded ){
                next();

            }else{
                res.status(401).send();

            };
        }catch(error) {
            res.status(401).send();

        };
    };
};


module.exports = new AuthorizationAdim();
