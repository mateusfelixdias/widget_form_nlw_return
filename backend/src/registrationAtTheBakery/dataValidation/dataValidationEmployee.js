const { funcionario } = require('../../database/modelsTables');
const yup = require('yup');


class ValidationEmployee {

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


        const EmailAlreadyRegistered = await funcionario.findOne({ 
            where: { email: email } 
        })

        if ( !EmailAlreadyRegistered ) { 
            return { name, email, password };
        };

        return 'Erro, o email já está cadstrado.';

    };
};

module.exports = new ValidationEmployee().dataValidation;
