import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import testClass from './baseDomain.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FinalProject extends testClass {
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

    get latitude5440Element(){
        return $('//a[contains(text(), "Latitude 5440 Laptop")]');
    }

    //Selectors testing Images & Video of the product Dell Latitude 5440

    get lat5440Img1Element(){
        return $('//button[@href="#mgal-img-1"]');
    }

    get lat5440Img2Element(){
        return $('//button[@href="#mgal-img-2"]');
    } 

    get lat5440Img3Element(){
        return $('//button[@href="#mgal-img-3"]');
    }

    get downButtonElement (){
        return $('//button[@class="down-next"]');
    }

    get lat5440VidElement(){
        return $('//button[@href="#mgal-vid-1"]');
    }

    get lat5440Img4Element(){
        return $('//button[@href="#mgal-img-4"]');
    }

    get lat5440Img5Element(){
        return $('//button[@href="#mgal-img-5"]');
    }

    get lat5440Img6Element(){
        return $('//button[@href="#mgal-img-6"]');
    }

    get lat5440Img7Element(){
        return $('//button[@href="#mgal-img-7"]');
    }

    get lat5440Img8Element(){
        return $('//button[@href="#mgal-img-8"]');
    }

    get lat5440Img9Element(){
        return $('//button[@href="#mgal-img-9"]');
    }

    get UpButtonElement(){
        return $('//button[@class="up-prev"]');
    }

    // get popUpElement(){
    //     return $('//button[@class="email-close-btn"]');
    // }
    /** Selectors "move mouse over images" */

    get moveMouseImg1Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-1"]');
    }

    get popUpCloseButton (){
        return $('//button[@class="email-close-btn"]');
    }
    //li[@class="active-group active"]/button[@href="#mgal-img-1"]'
    /**
     * Functions declared for Dell website test
     */
    
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
    
    async latitude5440 (){
        await this.latitude5440Element.click()
    }
    
    async latitude5440Img1 (){
        await this.lat5440Img1Element.click()
    }

    async latitude5440Img2 (){
        await this.lat5440Img2Element.click()
    }

    async latitude5440Img3 (){
        await this.lat5440Img3Element.click()
    }

    async latitude5440Video (){
        await this.lat5440VidElement.click()
    }

    async downButton (){
        (await this.downButtonElement).click()
    }

    async latitude5440Img4 (){
        await this.lat5440Img4Element.click()
    }

    async latitude5440Img5 (){
        (await this.lat5440Img5Element).click()
    }

    async latitude5440Img6 (){
        (await this.lat5440Img6Element).click()
    }

    async latitude5440Img7 (){
        (await this.lat5440Img7Element).click()
    }
    
    async latitude5440Img8 (){
        (await this.lat5440Img8Element).click()
    }

    async latitude5440Img9 (){
        (await this.lat5440Img9Element).click()
    }
    async UpButton (){
        await this.UpButtonElement.click()
        await this.UpButtonElement.waitForClickable({ timeout: 2000 }) 
        await this.UpButtonElement.click()

    }

    async moveMouseImg1 (){
        //await this.moveMouseImg1Element.moveTo();
        await this.moveMouseImg1Element.click();
        
    }
    
    async popUpClose (){
        if (await this.popUpCloseButton.waitForExist({timeout:250}) == true)
            await this.popUpCloseButton.click();
    }

    async getThePopUp(){
        try {
            await this.goToUrl()
            await this.burguerMenu()
            await this.ComputerAccesories()
            await this.laptops()
            await this.latitud()
            await this.latitude5440()
            await this.latitude5440Img1()
            await this.latitude5440Img2()
            await this.latitude5440Img3()
            await this.latitude5440Video()
            await this.downButton()
            await this.latitude5440Img4()
            await this.latitude5440Img5()
            await this.latitude5440Img6()
            await this.latitude5440Img7()
            await this.latitude5440Img8()
            await this.latitude5440Img9()
            await this.UpButton()
            await this.popUpClose()
            await this.moveMouseImg1()
        }
        catch{
            this.popUpClose()
        }

    }

    //...'//button[@class="email-close-btn"]'
    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
    goToUrl () {
        return super.goToUrl();
    }
}

export default new FinalProject();