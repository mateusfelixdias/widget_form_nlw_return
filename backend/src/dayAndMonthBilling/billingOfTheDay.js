const { faturamentoday } = require('../database/modelsTables');
const { produto } = require('../database/modelsTables');

class billingOfTheDay {
    async billingDay(req, res) {
        const current_day_billing = await faturamentoday.findOne(
            { where: { nome: req.body.nome } }
        );

        const price_of_the_product = await produto.findOne(
            { where: { nome: req.body.nome } }
        );

        const update_day_billing = { 
            billing_day: current_day_billing.faturamentoday + price_of_the_product.preço, 
            total_products_sold_on_the_day: current_day_billing.total + 1
        };

        const path = {
            value: { 
                faturamentoday: update_day_billing.billing_day,
                total: update_day_billing.total_products_sold_on_the_day 
            },
            where: { where: { nome: req.body.nome } },
            multi: { multi: true }
        };

        const updateDayBilling = await faturamentoday.update(
            path.value, 
            path.where, 
            path.multi, 
            () => {{}});

        if(updateDayBilling === 0){
            res.json({
                massage: `there was a failure to update the day's billing.`
            }).send();
        };

        res.json({
            massage: `day billing updated successfully.`
        }).send();
    };
};

module.exports = new billingOfTheDay();

