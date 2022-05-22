const config = require('../config/config');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

class Token {
    async token(request) {
        const { id, email } = request;

        const Authorization = await jwt.sign(
            { id: id,
              email: email
            },
            config.secret,
            { expiresIn: config.expiresIn }
        );

        if(!Authorization){
            return 'token vazio.';
        };

        const token = Authorization;

        try {
            const decoded = await promisify( jwt.verify )(token, config.secret);

            if(decoded){
                return { sucess: 'sucess' };

            }else{
                return 'token Inválido.'

            };

        }catch{
            return 'O token está expirado, tente novemente.'

        };
    };
};

module.exports = new Token().token;
