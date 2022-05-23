const dataValidationTest = require('../registrationAtTheBakery/dataValidation/dataValidationCliente');
const loginAdim = require('../authenticationAndAuthorizationAtTheBakery/login/loginAdim').loginAdim;
const productValidationTest = require('../BakeryProducts/ProductValidation/productValidation');

describe(`test on product registration`, () => {
    it(`should give an error if the name or price is invalid.`, async () => {
        await expect(productValidationTest({
            name: '', 
            price: 9.00
        })).resolves.toBe(`he product is invalid, try again.`);
    });


    it(`should give an error if the product is already registered.`, async () => {
        await expect(productValidationTest({
            name: 'Pão',
            price: 12.00
        })).resolves.toBe(`the product is already registered.`);
    });
});


describe(`test on user registration`, () => {
    it(`should give an error because the data is incomplete.`, async () => {
        await expect(dataValidationTest({
            name: '',
            email: 'mateusfla@gmail.com',
            password: 123456
        })).resolves.toBe(`Erro, dados inválidos.`);
    });


    it(`should give an error if the email is registered`, async () => {
        await expect(dataValidationTest({
            name: 'mateus',
            email: 'mateusfla@gmail.com',
            password: 123456
        })).resolves.not.toThrow();
    });
});


describe(`Authentication and authorization of adim`, () => {

    it(`should give an error because the data is invalid`, async () => {
        await expect(loginAdim({
            email: 'testmateusdias',
            password: '111111'
        })).resolves.toBe('Dados inválidos, tente novemente.');
    });


    it(`should gives error because the email is invalid`, async () => {
        await expect(loginAdim({
            email: 'testmateus@gmail.com',
            password: 'mateus'
        })).resolves.toBe('Erro, o E-mail não está cadastrado no sistema.');
    });


    it(`should give an error because the password is invalid`, async () => {
        await expect(loginAdim({
            email: 'Felixmateus@gmail.com',
            password: 'mateus'
        })).resolves.toBe('Senha inválida, tente novamente.');
    });


    it(`should da sucess if the token returns the massage: sucess.`, async () => {
        await expect(loginAdim({
            email: 'Felixmateus@gmail.com',
            password: 'mateus@@'
        })).resolves.not.toThrow();
    });
});