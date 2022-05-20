const { cliente } = require('../../database/modelsTables');
const yup = require('yup');


class ValidationCliente {

    async dataValidation( request ){

        const { name, email, password } = request;

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required()
        });

        const isValid = await schema.isValid({
            name: name,
            email: email,
            password: password 
        });

        if( !isValid ) { return 'Erro, dados inválidos.' };


        const EmailAlreadyRegistered = await cliente.findOne({ 
            where: { email: email } 
        })

        if ( !EmailAlreadyRegistered ) { 
            return { name, email, password };
        };

        return 'Erro, o email já está cadstrado.';

    };
};

module.exports = new ValidationCliente().dataValidation;
