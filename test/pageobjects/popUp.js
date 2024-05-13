import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';
import MainMenu from './mainMenu.js'
import Product from './Images5440Laptop.js'
import Configuration from './baseConfiguration.js'
import Model from './modelLaptop.js'

class PopUp extends TestClass {
    
    get popUpCloseButton (){
        return $('//button[@class="email-close-btn"]');
    }

    async images5440PopUp(){
        await browser.maximizeWindow(); 
        try {await Product.checking5440Images()
        }
        catch(originalError){
        console.log("************HERE IS THE ERROR WHEN THE POP UP HAPPENED OR DIDN'T HAPPEN******** : " + originalError)
            await this.popUpCloseButton.click()
            await Product.checking5440Images()
        }    
    }
    
    async navigateMenuPopUp(){
        await browser.maximizeWindow();
        try {await MainMenu.goToLaptop()
        }
        catch(originalError){
        console.log("************HERE IS THE ERROR WHEN THE POP UP HAPPENED OR DIDN'T HAPPEN******** : " + originalError)
            await this.popUpCloseButton.click()
            await MainMenu.goToLaptop()
        }         
    }

    async configurationPopUp(){
        await browser.maximizeWindow();
        try {await Configuration.selectBothConfigurations()
        }
        catch(originalError){
        console.log("************HERE IS THE ERROR WHEN THE POP UP HAPPENED OR DIDN'T HAPPEN******** : " + originalError)
            await this.popUpCloseButton.click()
            await Configuration.selectBothConfigurations()
        }
    }

    async modelPopUp(){
        await browser.maximizeWindow();
        try {await Model.model5440Laptop()
        }
        catch(originalError){
        console.log("************HERE IS THE ERROR WHEN THE POP UP HAPPENED OR DIDN'T HAPPEN******** : " + originalError)
            await browser.pause(1000)
            await this.popUpCloseButton.click()
            await browser.pause(1000)
            await Model.model5440Laptop()
        }
    }
}
export default new PopUp();