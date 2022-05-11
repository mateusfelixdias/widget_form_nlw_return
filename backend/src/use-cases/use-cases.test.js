const validation_test = require('../app/administrative_data/data_validation');

describe(`test on user registration`, () => {
    it(`should give an error if the name or price is invalid.`, async () => {
        await expect(validation_test.data_validation({
            nome: '', 
            preço: 9.00
        })).resolves.toBe('he name is invalid, try again.');
    });


    it(`should give an error if the name is already registered.`, async () => {
        await expect(validation_test.data_validation({
            nome: 'Pão',
            preço: 20.90
        })).resolves.not.toThrow();
    });
});
