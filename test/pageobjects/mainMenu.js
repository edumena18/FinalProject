import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';

class MainMenu extends TestClass {
    /**
     * define selectors using getter methods
     */
    get latitude5440Element(){
        return $('//a[contains(text(), "Latitude 5440 Laptop")]');
    }
    
    get burguerMenuElement(){
        return $('.mh-top-nav');
    }
    
    get computerAccElement(){
        return $('//span[contains(text(), "Computers & Accessories")]');
    }
    
    get laptopsElement(){
        return $('//li[@class="child-nav"]/button[contains(text(), "Laptops")]');
    }
    
    get latitudElement(){
        return $('//a[contains(text(), "Latitude Laptops")]');
    }

    //Functions

    async goToLaptop(){
        await this.goToUrl('')
        await this.burguerMenuElement.click()
        await this.computerAccElement.click()
        await this.laptopsElement.click()
        await this.latitudElement.click()
        await this.latitude5440Element.click()
        
    }

}  
export default new MainMenu();