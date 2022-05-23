const authorization = require('./authenticationAndAuthorizationAtTheBakery/mainAuthorization/middleware/authorizationTokenAdim');
const routes = require('express').Router();


//Controle de produtos: O administrador pode adicionar, atualizar, deleta, Ver todos os produtos cadastrados!
const all = require('./BakeryProducts/adiministrativeProducts/allProducts');
const deleta = require('./BakeryProducts/adiministrativeProducts/deletingProduct');
const insert = require('./BakeryProducts/adiministrativeProducts/addingProduct');
const update = require('./BakeryProducts/adiministrativeProducts/updateProduct');
//Rotas.
routes.post('/insert', authorization.authorization, insert.addingProduct);
routes.put('/update/:nome', authorization.authorization, update.updateProduct);
routes.get('/all', authorization.authorization, all.allProducts);
routes.delete('/delete/:nome', authorization.authorization, deleta.deleteProduct);


//Para o cliente fazer seu pedido.
const request = require('./bakeryInvoicing/dayAndMonthBilling/billingOfTheDay');
//Rota.
routes.post('/pedido', request.billingDay);


//Cadastro do Funcionário.
const registerEmployee = require('./registrationAtTheBakery/registerOnBakery/registerOnEmployee');
//Rota.
routes.post('/cadastro/funcionario', authorization.authorization, registerEmployee.registerEmployee);


//Cadastro do cliente.
const registerClinte = require('./registrationAtTheBakery/registerOnBakery/regiterOnCliente');
//Rota.
routes.post('/cadastro/cliente', authorization.authorization, registerClinte.registerEmployee);


//Login do administrador.
const login = require('./authenticationAndAuthorizationAtTheBakery/login/loginAdim');
//Rota.
routes.post('/login', login.loginAdim);

module.exports = routes;
