const routes = require('express').Router();

const all = require('./BakeryProducts/adiministrativeProducts/allProducts');
const deleta = require('./BakeryProducts/adiministrativeProducts/deletingProduct');
const insert = require('./BakeryProducts/adiministrativeProducts/addingProduct');
const update = require('./BakeryProducts/adiministrativeProducts/updateProduct');
const request = require('./InvoicingBakery/dayAndMonthBilling/billingOfTheDay');

routes.post('/insert', insert.addingProduct);
routes.post('/pedido', request.billingDay);
routes.put('/update/:nome', update.updateProduct);
routes.get('/all', all.allProducts);
routes.delete('/delete/:nome', deleta.deleteProduct);

module.exports = routes;
