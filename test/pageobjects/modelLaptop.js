import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';

class Model extends TestClass{
    
    get modelElemnt(){
        return $('//div[@class="variant-dropdown mb-6 dropdown"]');
    }

    // get model13Element(){
    //     return $('//a[@href="/en-us/shop/laptops/13-5340/spd/latitude-13-5340-2-in-1-laptop"]');
            
    // }

    get model14Element(){
        //return $('//div/a[@href="#"][contains(text(), "14")]');
        return $('//a[@href="/en-us/shop/laptops/14-5440/spd/latitude-14-5440-laptop"]');
    }

    get model15Element(){
        return $('//a[@href="/en-us/shop/laptops/new-15-5550/spd/latitude-15-5550-laptop"]');
    }
    
    async model(){
        await this.goToUrl('shop/laptops/14-5440/spd/latitude-14-5440-laptop')
        await this.modelElemnt.click()
        await this.model15Element.click()
        await browser.pause(3000)
        await this.modelElemnt.click()
        await this.model14Element.click()
        await browser.pause(3000)
       //await this.model13Element.click()
    }
}
export default new Model();