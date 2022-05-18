const productValidationTest = require('../BakeryProducts/ProductValidation/productValidation');
const dataValidationTest = require('../registrationAtTheBakery/dataValidation');

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
