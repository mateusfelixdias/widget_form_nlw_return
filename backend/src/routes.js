const routes = require('express').Router();

const all = require('./adiministrativeProducts/allProducts');
const deleta = require('./adiministrativeProducts/deletingProduct');
const insert = require('./adiministrativeProducts/addingProduct');
const update = require('./adiministrativeProducts/updateProduct');
const request = require('./dayAndMonthBilling/billingOfTheDay');

routes.post('/insert', insert.addingProduct);
routes.post('/pedido', request.billingDay);
routes.put('/update/:nome', update.updateProduct);
routes.get('/all', all.allProducts);
routes.delete('/delete/:nome', deleta.deleteProduct);

module.exports = routes;
