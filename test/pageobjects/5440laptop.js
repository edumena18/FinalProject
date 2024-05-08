import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import TestClass from './baseDomain.js';

class Product extends TestClass {
    
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

    get moveMouseImg1Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-1"]');
    }

    get moveMouseImg2Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-2"]');
    }

    get moveMouseImg3Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-3"]');
    }

    get moveMouseVidElemet(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-vid-1"]');
    }

    get moveMouseImg4Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-4"]');
    }

    get moveMouseImg5Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-5"]');
    }

    get moveMouseImg6Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-6"]');
    }

    get moveMouseImg7Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-7"]');
    }

    get moveMouseImg8Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-8"]');
    }

    get moveMouseImg9Element(){
        return $('//li[@class="active-group active"]/button[@href="#mgal-img-9"]');
    }
     //Functions

    async moveMouseImages(number){
       return $(`//li[@class="active-group active"]/button[@href="#mgal-img-${number}"]`)
    }

    async latitude5440Video (){
        await this.lat5440VidElement.moveTo()
    }    

    async checking5440Images(){
        await this.goToUrl('shop/dell-laptops/latitude-5440-laptop/spd/latitude-14-5440-laptop/')
        await this.selectAllImages()
        await this.doubleClickUp()
        await this.highlightImages()

    }

    async doubleClickUp(){
        await expect(this.UpButtonElement).toExist()
        await this.UpButtonElement.click()
        await this.UpButtonElement.click()
    }

    async doubleClickDown(){
        await expect(this.downButtonElement).toExist()
        await this.downButtonElement.click()
        await this.downButtonElement.click()
    }

    async selectAllImages(){
        await expect(this.lat5440Img1Element).toExist()
        await this.lat5440Img1Element.click()
        await expect(this.lat5440Img2Element).toExist()
        await this.lat5440Img2Element.click()
        await expect(this.lat5440Img3Element).toExist()
        await this.lat5440Img3Element.click()
        await expect(this.lat5440VidElement).toExist()
        await this.lat5440VidElement.click()
        await expect(this.downButtonElement).toExist()
        await this.downButtonElement.click()
        await expect(this.lat5440Img4Element).toExist()
        await this.lat5440Img4Element.click()
        await expect(this.lat5440Img5Element).toExist()
        await this.lat5440Img5Element.click()
        await expect(this.lat5440Img6Element).toExist()
        await this.lat5440Img6Element.click()
        await expect(this.lat5440Img7Element).toExist()
        await this.lat5440Img7Element.click()
        await expect(this.lat5440Img8Element).toExist()
        await this.lat5440Img8Element.click()
        await expect(this.lat5440Img9Element).toExist()
        await this.lat5440Img9Element.click()
    }

    async highlightImages(){
        await this.moveMouseImages('1')
        await this.moveMouseImages('2')
        await this.moveMouseImages('3')
        await this.latitude5440Video()
        await this.moveMouseImages('4')
        await this.moveMouseImages('5')
        await this.moveMouseImages('6')
        await this.moveMouseImages('7')
        await this.moveMouseImages('8')
        await this.moveMouseImages('9')
    }

}
export default new Product();