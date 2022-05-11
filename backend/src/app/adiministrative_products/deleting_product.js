const { faturamentoday } = require('../../database/models_tables');
const { faturamento } = require('../../database/models_tables');
const { produto } = require('../../database/models_tables');

class deleting_product {
    async delete_product (req, res){
        const name = { where: { nome: req.params.nome } };

        await faturamentoday.destroy(name);
        await faturamento.destroy(name);
        await produto.destroy(name);

        res.status(201).json({
            massage: `product deleted successfully.`
        });
    };
};

module.exports = new deleting_product();
