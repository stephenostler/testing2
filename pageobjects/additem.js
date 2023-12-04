const { $ } = require('@wdio/globals')
const Page = require('./page');

class addItem extends Page {
    
    get addBtn () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
   }

    async item () {
        await this.addBtn.click();
        await expect (this.btnCheck).toBeExisting();
 }

    get btnCheck(){
        return $('#remove-sauce-labs-bolt-t-shirt');
   }
}

module.exports = new addItem