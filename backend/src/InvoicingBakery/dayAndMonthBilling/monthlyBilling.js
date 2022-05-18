const { faturamento } = require('../../database/modelsTables');
const { produto } = require('../../database/modelsTables');

class monthlyBilling {
    async monthly_Billing (req, res){
        const current_billing = await faturamento.findOne(
            { where: { name: req.body.name } }
        );

        const price_of_the_product = await produto.findOne(
            { where: { name: req.body.name } }
        );

        const billingUpdate = { 
            billing: current_billing.faturamento + price_of_the_product.price 
        };

        const path = {
            value: { faturamento: billingUpdate.billing },
            where: { where: { name: req.body.name } },
            multi: { multi: true }
        };

        const updatebilling = await faturamento.update(
            path.value, 
            path.where, 
            path.multi, 
            () => {{}});

        if(updatebilling === 0){
            res.send(`hears failure to update billing.`);
        };

        res.send(`billing updated successfully.`);
    };
};


module.exports = new monthlyBilling();
