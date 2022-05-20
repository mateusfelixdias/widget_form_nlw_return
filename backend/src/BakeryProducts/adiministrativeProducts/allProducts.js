const { produto } = require('../../database/modelsTables');

class all_product {
    async allProducts (req, res) {
        const products = await produto.findAll();  
        
        const allProducts = await products.map(element => {
            return (
                `Produto: ${element.name}: Preço: ${element.price}.`
            );
        });

        res.send( String(allProducts).split(',').join('\n') );
    };
};

module.exports = new all_product ();
