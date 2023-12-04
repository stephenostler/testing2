const { $ } = require('@wdio/globals')
const Page = require('./page');

class addItem extends Page {
    
    get btnSubmit2 () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
   }

//     async click2 () {
//         await this.btnSubmit2.click();
//  }

    get btnCheck(){
        return $('#remove-sauce-labs-bolt-t-shirt')
   }
}