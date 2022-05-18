const { faturamentoday } = require('../../database/modelsTables');

class dailyBillingControl {
    async billingOfTheDay (){
        const invoicing_day = await faturamentoday.findAll();

        const billing_for_each_product = await invoicing_day.map(element => {
            return  (
                `Produto: ${element.name} | Total Vendidos: ${element.vendidos} | Faturamento: ${element.faturamentoday} R$.`
            );
        });

        const formatting_to_string = String(billing_for_each_product);

        const path  = { 
            value: { faturamentoday: 0, vendidos: 0 },
            where: { where: {} },
            multi: { multi: true }
        };

        await faturamentoday.update(
            path.value,
            path.where, 
            path.multi,
            () => {{}}
        );

        return await formatting_to_string.split(',').join('\n');
    };
};

module.exports = new dailyBillingControl().billingOfTheDay;
