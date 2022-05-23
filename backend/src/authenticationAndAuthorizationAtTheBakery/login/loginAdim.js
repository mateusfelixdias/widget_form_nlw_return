const validationData = require('../validationLogin/validationLoginAdim');
const { gerente } = require('../../database/modelsTables');
const token = require('../mainAuthorization/token/tokenAdim');


class Login {
    async loginAdim ( req, res ){
        const { email, password } = req.body;

        //Validando os dados.
        const validation = await validationData( { email, password } );


        if(typeof validation === 'object'){

            const tokenAdim = await token( { id: validation.id, email } );

            if(typeof tokenAdim === 'object'){
                
                const path = {
                    token: { token: tokenAdim.token }, 
                    multi: { multi: true },
                    where: { where: { email: email } },
                };

                const newToken = await gerente.update(
                    path.token,
                    path.where,
                    path.multi,
                    () => {{}}
                );

                return res.send( newToken[0] === 1 ? true : false );

            }else{
                return res.send( tokenAdim );

            };
        }else{
            return res.send( validation );

        };
    };
};
module.exports = new Login();
