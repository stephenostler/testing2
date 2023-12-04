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

   
   get butcheck2(){
       return $('#postal-code');
   }

   async checkoutTotal (){
        await this.cartClick();
        await this.checkoutClick();
        await expect(this.butcheck2).toBeExisting();
   }
}

module.exports = new Checkout