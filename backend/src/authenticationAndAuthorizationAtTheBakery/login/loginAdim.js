const validationData = require('../validationLogin/validationLoginAdim');
const token = require('../token/tokenAdim/token');


class Login {
    async loginAdim (req, res, next){
        const { email, password } = req.body || req;

        const validation = await validationData( { email, password } );

        if(typeof validation === 'object'){
            const tokenAdim = await token( { id: validation.id } ) ;

            if(typeof tokenAdim === 'object'){
                res.send(true);

            }else{
                res.send(tokenAdim);
            };
        }else{
            return res.send(validation);

        };
    };
};

module.exports = new Login();
