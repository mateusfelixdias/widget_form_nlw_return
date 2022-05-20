const routes = require('express').Router();

//Controle de produtos: O administrador pode adicionar, atualizar, deleta, Ver todos os produtos cadastrados!
const all = require('./BakeryProducts/adiministrativeProducts/allProducts');
const deleta = require('./BakeryProducts/adiministrativeProducts/deletingProduct');
const insert = require('./BakeryProducts/adiministrativeProducts/addingProduct');
const update = require('./BakeryProducts/adiministrativeProducts/updateProduct');
//Rotas.
routes.post('/insert', insert.addingProduct);
routes.put('/update/:nome', update.updateProduct);
routes.get('/all', all.allProducts);
routes.delete('/delete/:nome', deleta.deleteProduct);


//Para o cliente fazer seu pedido.
const request = require('./bakeryInvoicing/dayAndMonthBilling/billingOfTheDay');
//Rota.
routes.post('/pedido', request.billingDay);


//Cadastro do Funcionário.
const registerEmployee = require('./registrationAtTheBakery/registerOnBakery/registerOnEmployee');
//Rota.
routes.post('/cadastro/funcionario', registerEmployee.registerEmployee);


//Cadastro do cliente.
const registerClinte = require('./registrationAtTheBakery/registerOnBakery/regiterOnCliente');
//Rota.
routes.post('/cadastro/cliente', registerClinte.registerEmployee);


//Login do administrador.
const login = require('./authenticationAndAuthorizationAtTheBakery/login/loginAdim');
//Rota.
routes.post('/login', login.loginAdim);


module.exports = routes;
