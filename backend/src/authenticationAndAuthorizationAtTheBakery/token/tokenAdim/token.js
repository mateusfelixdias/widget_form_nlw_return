const config = require('../config/config');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');


class Token {
    async token(request) {
        const { id } = request;

        const token = await jwt.sign(
            { id: id },
            config.secret,
            { expiresIn: config.expiresIn }
        );

        if(!token){
            return 'token vazio.';
        };


        try {
            const decoded = await promisify( jwt.verify )(token, config.secret);

            if(decoded){
                return token;
            }else{
                return 'token Inválido.'

            };

        }catch{
            return 'O token está expirado, tente novemente.'

        };
    };
};

module.exports = new Token().token;

