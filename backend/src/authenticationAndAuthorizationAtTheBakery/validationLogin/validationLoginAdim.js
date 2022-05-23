const bcryptjs = require('bcryptjs');
const { gerente } = require('../../database/modelsTables');
const yup = require('yup');

class Validation {

    async validationData (request){
        const { email, password } = request;

        const schema = yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required()
        });

        const isValid = await schema.isValid({
            email: email,
            password: password
        });


        if(!isValid){
            return 'Dados inválidos, tente novemente.'

        };

        const dataAdim = await gerente.findOne( { where: { email: email } } );
        
        if(!dataAdim){
            return 'Erro, o E-mail não está cadastrado no sistema.'
            
        };

        const password_hash = dataAdim.password;

        const compare = await bcryptjs.compare( password, password_hash );

        if(!compare){
            return 'Senha inválida, tente novamente.'
            
        };

        return { email, password, id: dataAdim.id };
    };
};


module.exports = new Validation().validationData;
