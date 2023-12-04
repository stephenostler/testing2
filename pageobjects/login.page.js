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
        return $('.app_logo')
   }

   
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    
    open () {
        return super.open();
    }


    async click () {
         await this.btnSubmit.click();
        }

        
    async click3 () {
         await this.btnSubmit3.click();
        }

   

    get btnSubmit3 () {
        return $('.shopping_cart_link');
    }

    get btnSubmit4 () {
        return $('[data-test="checkout"]');
    }
    async click4 () {
        await this.btnSubmit4.click();
    }
    get butcheck2(){
        return $('#postal-code')
    }

   
    get btnSubmit2 () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
       }

    async click2 () {
        await this.btnSubmit2.click();
     }
    get btnCheck(){
        return $('#remove-sauce-labs-bolt-t-shirt')
       }
  
    get btnsubmit5 (){
        return $('#react-burger-menu-btn')
    }
    async click5 (){
        await this.btnsubmit5.click();
    }
    get btnsubmit6(){
        return $('#logout_sidebar_link')
    }
    async click6(){
        await this.btnsubmit6.click();
    }
}

  
module.exports = new LoginPage();
