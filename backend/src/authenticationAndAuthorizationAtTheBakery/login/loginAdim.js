const validationData = require('../validationLogin/validationLoginAdim');
const { gerente } = require('../../database/modelsTables');
const token = require('../token/tokenAdim/token');


class Login {
    async loginAdim ( req, res ){
        const { email, password } = req.body;

        //Validando os dados.
        const validation = await validationData( { email, password } );


        if(typeof validation === 'object'){
            const tokenAdim = await token( { id: validation.id, email } );


            if(typeof tokenAdim === 'object'){
                const [ , tokenAlreadyValidated ] = await req.headers.authorization.split(' ');


                const path = {
                    token: { token: tokenAlreadyValidated }, 
                    multi: { multi: true },
                    where: { where: { email: email } },
                };

                const newToken = await gerente.update(
                    path.token,
                    path.where,
                    path.multi,
                    () => {{}}
                );

                res.send(newToken[0] === 1 ? true : false );

            }else{
                res.send( tokenAdim );

            };
        }else{
            res.send( validation );

        };
    };
};
module.exports = new Login();
