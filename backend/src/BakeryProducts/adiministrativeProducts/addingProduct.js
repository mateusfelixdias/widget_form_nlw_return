const productValidation  = require('../ProductValidation/productValidation');
const { faturamentoday } = require('../../database/modelsTables');
const { faturamento } = require('../../database/modelsTables');
const { produto } = require('../../database/modelsTables');

class adding_product {
    async addingProduct (req, res){
        const { name, price } = req.body;

        const validation = await productValidation({ name, price });

        if(typeof validation === 'object'){
            await faturamentoday.create({
                name: validation.name,
                vendidos: 0,
                faturamentoday: 0
            });

            await faturamento.create({
                name: validation.name,
                faturamento: 0
            });

            await produto.create({
                name: validation.name,
                price: validation.price
        });

        res.send('Cadastro concluido com sucesso.')


        }else{
            res.send(validation);
        };

    };
};

module.exports = new adding_product();
