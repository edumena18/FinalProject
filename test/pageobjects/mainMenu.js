import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';

class MainMenu extends TestClass {
    /**
     * define selectors using getter methods
     */
    
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

    async burguerMenu (){
        await this.burguerMenuElement.click()
    }
    
    async ComputerAccesories (){
        await this.computerAccElement.click()
    }
    
    async laptops (){
        await this.laptopsElement.click()
    }
    
    async latitud (){
        await this.latitudElement.click()
    }
}  
export default new MainMenu();