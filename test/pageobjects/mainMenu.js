import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';

class MainMenu extends TestClass {
   
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

    async goToLaptop(){
        await this.goToUrl('')
        await expect(this.burguerMenuElement).toExist()
        await this.burguerMenuElement.click()
        await expect(this.computerAccElement).toExist()
        await this.computerAccElement.click()
        await expect(this.laptopsElement).toExist()
        await this.laptopsElement.click()
        await expect(this.latitudElement).toExist()
        await this.latitudElement.click()
        await expect(this.latitude5440Element).toExist()
        await this.latitude5440Element.click()
        
    }

}  
export default new MainMenu();