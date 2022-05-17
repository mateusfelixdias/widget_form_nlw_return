const { faturamentoday } = require('../database/modelsTables');
const { faturamento } = require('../database/modelsTables');
const { produto } = require('../database/modelsTables');

class deleting_product {
    async deleteProduct (req, res){
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
