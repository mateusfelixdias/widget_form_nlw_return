const productValidation  = require('../ProductValidation/productValidation');
const { faturamentoday } = require('../../database/modelsTables');
const { faturamento } = require('../../database/modelsTables');
const { produto } = require('../../database/modelsTables');

class adding_product {
    async addingProduct (req, res){
        const { nome, preço } = req.body;

        const validation = await productValidation({ nome, preço });

        if(typeof validation === 'object'){
            await faturamentoday.create({
                nome: validation.nome,
                total: 0,
                faturamentoday: 0
            });

            await faturamento.create({
                nome: validation.nome,
                faturamento: 0
            });

            await produto.create({
                nome: validation.nome,
                preço: validation.preço
        });

        res.send('Cadastro concluido com sucesso.')


        }else{
            res.send(validation);
        };

    };
};

module.exports = new adding_product();
