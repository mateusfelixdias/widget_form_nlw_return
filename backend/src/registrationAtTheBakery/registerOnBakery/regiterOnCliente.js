const bcryptjs = require('bcryptjs');
const dataValidation = require('../dataValidation/dataValidationCliente');
const { cliente } = require('../../database/modelsTables');


class RegisterCliente {
    async registerEmployee (req, res) {
        const { name, email, password } = req.body;

        const validation = await dataValidation( { name, email, password } );

        if ( typeof validation === 'object' ){

            const password_hash = await bcryptjs.hash(password, 8);

            const Cliente = await cliente.create({
                name: validation.name,
                email: validation.email,
                password: password_hash
            }); 
            
            if( !Cliente ){ res.send('Erro tentar ao se cadastrar, tente novemente.') };

            res.send(`Cadastrado concluido com sucesso.`);

        }else{
            res.send(validation);
        };
    };
};

module.exports = new RegisterCliente();


