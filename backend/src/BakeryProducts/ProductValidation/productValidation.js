const { produto } = require('../../database/modelsTables');


class Product_validation {

    async productValidation (request){
        const { name, price } = request;

        if(!name || !isNaN(name)){
            return `he product is invalid, try again.`
        };
        
        if(!price || isNaN(price)){
            return `ha price is invalid, try again.`
        };
        
        const is_already_registered = await produto.findOne({ where: { name: name } });
        
        if(!is_already_registered){
            return { name, price };
        };

        return `the product is already registered.`;

    };
};


module.exports = new Product_validation().productValidation;
