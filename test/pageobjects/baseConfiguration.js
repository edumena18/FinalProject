import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';

class Configuration extends TestClass {

    get configuration5450Element() {
        return $('//a[contains(text(), "New 14” 5450")]');
    }

    get configuration5440Element() {
        return $('//a[@class="base-config-option btn model rounded-sm btn-outline-dark mt-1 mb-4 mx-0"]');
    }

    get latitude5450Title(){
        return $('//h1[@class="mb-md-0 mr-4 d-inline"]')
    }

    get highlightProcessor5450(){
        //return $('//span[@data-test-id="option-title"][contains(text(), "Intel® Core™ Ultra 5 125U processor (12 MB cache, 12 cores, 14 threads, up to 4.3 GHz Turbo)")]')
        return $('//div[@data-status="selected"]/span[@data-test-id="option-title"][contains(text(), "Intel® Core™ Ultra 5 125U processor (12 MB cache, 12 cores, 14 threads, up to 4.3 GHz Turbo)")]')
    }

    get memory5450(){
        return $('//span[@data-test-id="option-title"][contains(text(), "16 GB: 2 x 8 GB, DDR5, 5600 MT/s (5200 MT/s with 13th Gen Intel® Core™ processors)")]')
    }

    get storage5450(){
        return $('//span[@data-test-id="option-title"][contains(text(), "256 GB, M.2 2230, TLC, Gen 4 PCIe NVMe, SSD")]')
    }
    // async configuration5440 (){
    //     await this.configuration5440Element.click()
    // }

    // configuration1 = this.configuration5440Element
    // configuration2 = this.configuration5450Element

    // if (configuration1){
    //     this.configuration5440()

    //}
    async selectBothConfigurations (){
        await this.goToUrl('shop/laptops/14-5440/spd/latitude-14-5440-laptop')
        await expect(this.configuration5450Element).toExist()
        await this.configuration5450Element.click()
        await this.checkingHighlight5450Laptop()
        //await expect(this.latitude5450Title).toExist()
        await expect(this.configuration5440Element).toExist()
        await this.configuration5440Element.click()
    }

   async checkingHighlight5450Laptop(){
        await expect(this.latitude5450Title).toExist()
        await expect(this.highlightProcessor5450).toExist()
        await expect(this.memory5450).toExist()
        await expect(this.storage5450).toExist()

}
   }
   
   //async 
   
    // async configuration5440 (){
    //     await this.configuration5440Element.click()
    // }


export default new Configuration();

