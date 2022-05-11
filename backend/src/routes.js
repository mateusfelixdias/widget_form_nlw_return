const all = require('./app/adiministrative_products/all_products');
const deleta = require('./app/adiministrative_products/deleting_product');
const insert = require('./app/adiministrative_products/adding _product');
const update = require('./app/adiministrative_products/update_product');
const routes = require('express').Router();

routes.delete('/delete/:nome', deleta.delete_product);

routes.get('/all', all.all_products);

routes.post('/insert', insert.adding_product);

routes.put('/update/:nome', update.update_product);

module.exports = routes;
