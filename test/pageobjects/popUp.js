import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';
import MainMenu from './mainMenu.js'
import Product from './5440laptop.js'

class PopUp extends TestClass {
    
    get popUpCloseButton (){
        return $('//button[@class="email-close-btn"]');
    }
    
    // async popUpClose (){
    //     if (await this.popUpCloseButton.waitForExist({timeout:250}) == true)
    //         await this.popUpCloseButton.click();
    //}

    async testLaptop(){
        await this.goToUrl()
        await MainMenu.burguerMenu()
        await MainMenu.ComputerAccesories()
        await MainMenu.laptops()
        await MainMenu.latitud()
        await Product.latitude5440()
        await Product.latitude5440Img1()
        await Product.latitude5440Img2()
        await Product.latitude5440Img3()
        await Product.latitude5440Video()
        await Product.downButton()
        await Product.latitude5440Img4()
        await Product.latitude5440Img5()
        await Product.latitude5440Img6()
        await Product.latitude5440Img7()
        await Product.latitude5440Img8()
        await Product.latitude5440Img9()
        await Product.UpButton()
        //await this.popUpClose()
        await Product.moveMouseImg1()
        await Product.moveMouseImg2()
        await Product.moveMouseImg3()
    }


    async closePopupCheckLaptop(){
        try {
            this.testLaptop()
        }catch(error){
            console.log("HERE IS THE ERROR WHEN THE POP UP HAPPENED: " + error)
            await this.popUpCloseButton.click()
            await browser.pause(2000)
            await this.testLaptop()
        }
    }

    goToUrl () {
        return super.goToUrl();

    }
}
export default new PopUp();