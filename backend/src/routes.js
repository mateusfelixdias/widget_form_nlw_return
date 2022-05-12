const all = require('./app/adiministrative_products/all_products');
const deleta = require('./app/adiministrative_products/deleting_product');
const insert = require('./app/adiministrative_products/adding_product');
const update = require('./app/adiministrative_products/update_product');
const request = require('./app/day_and_month_billing/billingOfTheDay');

const routes = require('express').Router();

routes.post('/insert', insert.adding_product);

routes.post('/pedido', request.billingDay);

routes.put('/update/:nome', update.update_product);

routes.get('/all', all.all_products);

routes.delete('/delete/:nome', deleta.delete_product);

module.exports = routes;
