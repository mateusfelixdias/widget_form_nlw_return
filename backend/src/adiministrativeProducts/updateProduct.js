const { faturamentoday } = require('../database/modelsTables');
const { faturamento } = require('../database/modelsTables');
const { produto } = require('../database/modelsTables');

class update_product {
    async updateProduct(req, res){
        const path  = { 
            name: { nome: req.body.nome },
            multi: { multi: true },
            where: { where: { nome: req.params.nome } }
        };

        const product_update = await produto.update(
            req.body, 
            path.where, 
            path.multi,
            () => {{}}
        );

        const billing_update = await faturamento.update(
            path.name, 
            path.where, 
            path.multi,
            () => {{}}
        );
    
    
        const billingday_update = await 
        faturamentoday.update(
            path.name,
            path.where, 
            path.multi,
            () => {{}}
        );

        return res.status(201).json({
            massage: `update performed successfully.`
        })
    };
};

module.exports = new update_product();


