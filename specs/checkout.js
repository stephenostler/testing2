const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const loginPage = require('../pageobjects/login.page')
const addItem = require('../pageobjects/additem')
const checkout = require('../pageobjects/checkout')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        
    })
})

describe('Adding shirt to cart ', () => {
    it('should add shirt to cart', async () => {
        await addItem.item();
        await expect(addItem.btnCheck).toBeExisting();
    })
})

describe('Checking out ', () => {
    it('allows a user to checkout ', async () => {
        await checkout.checkoutTotal;
    })
})