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

    // async configuration5440 (){
    //     await this.configuration5440Element.click()
    // }

    // configuration1 = this.configuration5440Element
    // configuration2 = this.configuration5450Element

    // if (configuration1){
    //     this.configuration5440()

    //}
    async selectBothConfigurations (){
        await this.configuration5450Element.click()
        await this.configuration5440Element.click()
    }

   
    // async configuration5440 (){
    //     await this.configuration5440Element.click()
    // }
}
export default new Configuration();

