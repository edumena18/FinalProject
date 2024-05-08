import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';
import MainMenu from './mainMenu.js'
import Product from './5440laptop.js'
import Configuration from './baseConfiguration.js'
import Model from './modelLaptop.js'

class PopUp extends TestClass {
    
    get popUpCloseButton (){
        return $('//button[@class="email-close-btn"]');
    }
    
    // async laptopPopUpCatch(){
    //     try {await this.testLaptop()
    //     }
    //     catch(originalError){
    //     console.log("************HERE IS THE ERROR WHEN THE POP UP HAPPENED OR DIDN'T HAPPEN******** : " + originalError)
    //         await browser.pause(4000)
    //         await this.popUpCloseButton.click()
    //         await browser.pause(2000)
    //         await this.testLaptop()
    //     }
    // }

    // async testLaptop(){
    //     // await this.goToUrl('')
    //     await MainMenu.goToLaptop()
    //     await Product.checking5440Images()
    //     await Configuration.selectBothConfigurations()
    //     await Model.modelConfiguration()
    // }

    async images5440PopUp(){
        //await this.goToUrl('shop/dell-laptops/latitude-5440-laptop/spd/latitude-14-5440-laptop/'  
        try {await Product.checking5440Images()
        }
        catch(originalError){
        console.log("************HERE IS THE ERROR WHEN THE POP UP HAPPENED OR DIDN'T HAPPEN******** : " + originalError)
            //await browser.pause(4000)
            await this.popUpCloseButton.click()
            //await browser.pause(2000)
            await Product.checking5440Images()
        }    
    }
    
    async navigateMenuPopUp(){
        
        try {await MainMenu.goToLaptop()
        }
        catch(originalError){
        console.log("************HERE IS THE ERROR WHEN THE POP UP HAPPENED OR DIDN'T HAPPEN******** : " + originalError)
            //await browser.pause(4000)
            await this.popUpCloseButton.click()
            //await browser.pause(2000)
            await MainMenu.goToLaptop()
        }         
    }

    async configurationPopUp(){
        try {await Configuration.selectBothConfigurations()
        }
        catch(originalError){
        console.log("************HERE IS THE ERROR WHEN THE POP UP HAPPENED OR DIDN'T HAPPEN******** : " + originalError)
            //await browser.pause(4000)
            await this.popUpCloseButton.click()
            //await browser.pause(2000)
            await Configuration.selectBothConfigurations()
        }
    }

    async modelPopUp(){
        try {await Model.model()
        }
        catch(originalError){
        console.log("************HERE IS THE ERROR WHEN THE POP UP HAPPENED OR DIDN'T HAPPEN******** : " + originalError)
            await browser.pause(4000)
            await this.popUpCloseButton.click()
            await browser.pause(2000)
            await Model.model()
        }
    }

    // goToUrl () {
    //     return super.goToUrl();

    // }
}
export default new PopUp();