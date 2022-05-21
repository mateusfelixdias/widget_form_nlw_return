const validationData = require('../validationLogin/validationLoginAdim');
const token = require('../token/tokenAdim/token');


class Login {
    async loginAdim ( req, res ){
        const { email, password } = req.body;

        const validation = await validationData( { email, password } );

        if(typeof validation === 'object'){
            const tokenAdim = await token( { id: validation.id } ) ;

            if(typeof tokenAdim === 'object'){
                res.send(tokenAdim);

            }else{
                res.send(tokenAdim);
            };
        }else{
            res.send(validation);

        };
    };
};

module.exports = new Login();
