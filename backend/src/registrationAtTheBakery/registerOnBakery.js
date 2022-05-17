const bcryptjs = require('bcryptjs');
const dataValidation = require('./dataValidation');
const { user } = require('../database/modelsTables');


class Register {
    async register (req, res) {
        const { name, email, password } = req.body;

        const validation = await dataValidation({ name, email, password });

        if (typeof validation === 'object'){

            const password_hash = bcryptjs.hash(password, 8);

            const User = await user.create({
                name: validation.name,
                email: validation.email,
                password: password_hash
            }); 
            
            if(!User){ res.send('Erro ao cadastrar o usuário, tente novemente.') };

            res.send(`Usuário cadastrado com sucesso.`);

        }else{
            res.send(validation);
        };
    };
};


module.exports = new Register();

