const { faturamentoday } = require('../../database/modelsTables');
const { produto } = require('../../database/modelsTables');

class billingOfTheDay {
    async billingDay(req, res) {
        const current_day_billing = await faturamentoday.findOne(
            { where: { name: req.body.name } }
        );

        const price_of_the_product = await produto.findOne(
            { where: { name: req.body.name } }
        );

        const update_day_billing = { 
            billing_day: current_day_billing.faturamentoday + price_of_the_product.price, 
            total_products_sold_on_the_day: current_day_billing.vendidos + 1
        };

        const path = {
            value: { 
                faturamentoday: update_day_billing.billing_day,
                total: update_day_billing.total_products_sold_on_the_day 
            },
            where: { where: { name: req.body.name } },
            multi: { multi: true }
        };

        const updateDayBilling = await faturamentoday.update(
            path.value, 
            path.where, 
            path.multi, 
            () => {{}});

        if(updateDayBilling === 0){
            res.send(`there was a failure to update the day's billing.`);

        };

        res.send(`day billing updated successfully.`);
    };
};

module.exports = new billingOfTheDay();

