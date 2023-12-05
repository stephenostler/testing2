const { $ } = require('@wdio/globals')
const Page = require('./page');

class Checkout extends Page {
    async cartClick () {
        await this.cartBtn.click();
       }

   get cartBtn () {
       return $('.shopping_cart_link');
   }
   
   async checkoutClick () {
    await this.checkoutBtn.click();
}
   get checkoutBtn () {
       return $('[data-test="checkout"]');
   }

   get postalcode(){
       return $('#postal-code');
   }

   get firstNamecheckout (){
        return $('#first-name');
   }

   get lastNamecheckout () {
        return $('#last-name');
   }

   get continueBtn (){
        return $('#continue')
   }

   get finishBtn (){
        return $('#finish')
   }

   get backHomeBtn (){
        return $('#back-to-products')
   }

   async continueClick(){
        await this.continueBtn.click
   }

   async finishClick(){
        await this.finishBtn.click
   }

   async homeClick(){
        await this.backHomeBtn.click
   }

   async userInfo (username, lastname, zipcode){
        await this.firstNamecheckout.setValue(username)
        await this.lastNamecheckout.setValue(lastname)
        await this.postalcode.setValue(zipcode)
   }

   async checkoutTotal (){
        await this.cartClick();
        await this.checkoutClick();
        await expect(this.postalcode).toBeExisting();
        await this.userInfo('meg', 'griffin', '45678');
        await this.continueClick();
        await this.finishClick();
        await this.homeClick();
   }
}

module.exports = new Checkout