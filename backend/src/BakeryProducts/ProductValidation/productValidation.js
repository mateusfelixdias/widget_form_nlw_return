const { produto } = require('../../database/modelsTables');


class Product_validation {

    async productValidation (request){
        const { nome, preço } = request;

        if(!nome || !isNaN(nome)){
            return `he product is invalid, try again.`
        };
        
        if(!preço || isNaN(preço)){
            return `ha price is invalid, try again.`
        };
        
        const is_already_registered = await produto.findOne({ where: { nome: nome } });
        
        if(!is_already_registered){
            return { nome, preço };
        };

        return `the product is already registered.`;

    };
};

module.exports = new Product_validation().productValidation;
