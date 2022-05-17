const { faturamento } = require('../../database/modelsTables');
const { produto } = require('../../database/modelsTables');

class monthlyBilling {
    async monthly_Billing (req, res){
        const current_billing = await faturamento.findOne(
            { where: { nome: req.body.nome } }
        );

        const price_of_the_product = await produto.findOne(
            { where: { nome: req.body.nome } }
        );

        const billingUpdate = { 
            billing: current_billing.faturamento + price_of_the_product.preço 
        };

        const path = {
            value: { faturamento: billingUpdate.billing },
            where: { where: { nome: req.body.nome } },
            multi: { multi: true }
        };

        const updatebilling = await faturamento.update(
            path.value, 
            path.where, 
            path.multi, 
            () => {{}});

        if(updatebilling === 0){
            res.json({
                massage: `hears failure to update billing.`
            }).send();
        };

        res.json({
            massage: `billing updated successfully.`
        }).send();
    };
};


module.exports = new monthlyBilling();

