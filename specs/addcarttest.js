const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const loginPage = require('../pageobjects/login.page')
const addItem = require('../pageobjects/additem')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    })
})

describe('Adding shirt to cart ', () => {
    it('should add shirt to cart', async () => {
        await addItem.item();
    })
})