const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
   
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginBtn () {
        return $('#login-button');
    }

   get pagecheck (){
        return $('.app_logo');
   }

   
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
        await expect(this.pagecheck).toBeExisting();
    }

    open () {
        return super.open();
    }
}

  
module.exports = new LoginPage();
