const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const addItem = require('../pageobjects/additem')
const checkout = require('../pageobjects/checkout')
const logout = require('../pageobjects/userlogout')


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

describe('Checking out ', () => {
    it('allows a user to checkout ', async () => {
        await checkout.checkoutTotal;
    })
})
describe('Logout user ', () => {
    it ('allows a user to logout', async() => {
        await logout.logoutFinal;
    })
})
