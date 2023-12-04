const { $ } = require('@wdio/globals')
const Page = require('./page');
const LoginPage = require('../pageobjects/login.page')

class logout extends Page {
   
    get burgerMenu (){
        return $('#react-burger-menu-btn');
    }

    async burgerClick(){
        await this.burgerMenu.click();
    }

    get sideBtn(){
        return $('#logout_sidebar_link');
    }

    async logoutClick(){
        await this.sideBtn.click();
    }

    async logoutFinal(){
        await this.burgerClick;
        await this.sideBtn.waitForClickable ({setTimeout: 200});
        await this.logoutClick();
        await expect(LoginPage.inputUsername).toBeExisting();
    }
}

module.exports = new logout