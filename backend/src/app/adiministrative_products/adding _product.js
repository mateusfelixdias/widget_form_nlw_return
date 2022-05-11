const dataValidation  = require('../administrative_data/data_validation').data_validation;
const { faturamentoday } = require('../../database/models_tables');
const { faturamento } = require('../../database/models_tables');
const { produto } = require('../../database/models_tables');


class adding_product {
    async adding_product (req, res){
        const { nome, preço } = req.body;

        const validation = await dataValidation({ nome, preço });

        if(await typeof validation === 'object'){
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

        res.status(201).json({
            massage: `successfully.`
        });


        }else{
            res.send(validation);
        };

    };
};

module.exports = new adding_product();
