const bcryptjs = require('bcryptjs');
const dataValidation = require('../dataValidation/dataValidationEmployee');
const { funcionario } = require('../../database/modelsTables');


class RegisterEmployee {
    async registerEmployee (req, res) {
        const { name, email, password } = req.body;

        const validation = await dataValidation( { name, email, password } );

        if ( typeof validation === 'object' ){

            const password_hash = await bcryptjs.hash(password, 8);

            const employee = await funcionario.create({
                name: validation.name,
                email: validation.email,
                password: password_hash
            }); 
            
            if( !employee ){ res.send('Erro tentar ao se cadastrar, tente novemente.') };

            res.send(`Cadastrado concluido com sucesso.`);

        }else{
            res.send(validation);
        };
    };
};


module.exports = new RegisterEmployee();

