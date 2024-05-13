import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';

class Model extends TestClass{
    
    get modelElemnt(){
        return $('//div[@class="variant-dropdown mb-6 dropdown"]');
    }

    get model13Element(){
        return $('//a[@href="/en-us/shop/laptops/13-5340/spd/latitude-13-5340-2-in-1-laptop"]');
                
    }

    get model14Element(){
        return $('//a[@href="/en-us/shop/laptops/14-5440/spd/latitude-14-5440-laptop"]');
    }

    get model15Element(){
        return $('//a[@href="/en-us/shop/laptops/new-15-5550/spd/latitude-15-5550-laptop"]');
    }
    
    async model5440Laptop(){
        await this.goToUrl('shop/laptops/14-5440/spd/latitude-14-5440-laptop')
        await expect(this.modelElemnt).toExist()
        await this.modelElemnt.click()
        await expect(this.model15Element).toExist()
        await this.model15Element.click()
        await this.modelElemnt.click()
        await expect(this.model14Element).toExist()
        await this.model14Element.click()
        await this.modelElemnt.click()
        await expect(this.model13Element).toExist()
        await this.model13Element.click()
    }
}
export default new Model();