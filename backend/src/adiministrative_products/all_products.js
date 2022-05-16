const { faturamentoday } = require('../database/models_tables');
const { faturamento } = require('../database/models_tables');
const { produto } = require('../database/models_tables');

class all_products {
    async all_products (req, res){
        
        res.status(201).json({
            invoicingday: await faturamentoday.findAll(),
            products: await produto.findAll(),
            invoicing: await faturamento.findAll()
        });
    };
};


module.exports = new all_products();
