const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const loginPage = require('../pageobjects/login.page')


describe('My Login application', () => {
    it('should not login', async () => {
        await LoginPage.open()

        await LoginPage.login('sstandardhue', 'secret_sauce')
        await expect(loginPage.badlogin).toBeExisting()
    })
})

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(loginPage.pagecheck).toBeExisting()
    })
})

describe('Adding shirt to cart ', () => {
    it('should add shirt to cart', async () => {
        await LoginPage.btnSubmit2.click()
        await expect(loginPage.btnCheck).toBeExisting()
    })
})
describe('Checking out ', () => {
        it('allow user to checkout ', async () => {
            await loginPage.click3()
            await loginPage.click4()
            await expect(loginPage.butcheck2).toBeExisting()
        })

describe('Logout user ', () => {
    it ('allows a user to logout', async() => {
        await loginPage.click5()
        await 
        await loginPage.click6()
        await expect(loginPage.inputUsername).toBeExisting()
    })
})


})