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
        return $('//div[@data-status="selected"]/span[@data-test-id="option-title"][contains(text(), "Intel® Core™ Ultra 5 125U processor (12 MB cache, 12 cores, 14 threads, up to 4.3 GHz Turbo)")]')
        
    }

    get highlightMemory5450(){
        return $('//div[@data-status="selected"]/span[@data-test-id="option-title"][contains(text(), "16 GB: 2 x 8 GB, DDR5, 5600 MT/s (5200 MT/s with 13th Gen Intel® Core™ processors)")]')
    }

    get highlightStorage5450(){
        return $('//div[@data-status="selected"]/span[@data-test-id="option-title"][contains(text(), "256 GB, M.2 2230, TLC, Gen 4 PCIe NVMe, SSD")]')
    }

    get highlightDisplay5450(){
        return $('//div[@data-status="selected"]/span[@data-test-id="option-title"][contains(text(), "256 GB, M.2 2230, TLC, Gen 4 PCIe NVMe, SSD")]')
    }

    get highlightCamera5450(){
        return $('//div[@data-status="selected"]/span[contains(text(), "FHD HDR IR Camera, ExpressSign-In, No Intelligent Privacy, TNR, Camera Shutter, Microphone")]')
    }

    get highlightSystemsManagement5450(){
        return $('//div[@data-status="selected"]/span[contains(text(), "Intel® vPro® Management Disabled")]')
    }

    get highlightPalmRest5450(){
        return $('//div[@data-status="selected"]/span[contains(text(), "No Security")]')
    }

    get latitude5440Title(){
        return $('//h1[@class="mb-md-0 mr-4 d-inline"]')
    }

    get highlightProcessor5440(){
        return $('//div[@data-status="selected"]/span[@data-test-id="option-title"][contains(text(), "13th Gen Intel® Core™ i5-1335U (12 MB cache, 10 cores, 12 threads, up to 4.6 GHz Turbo)")]')
        
    }

    get highlightMemory5440(){
        return $('//div[@data-status="selected"]/span[contains(text(), "16 GB, 2 x 8 GB, DDR4, 3200 MT/s, Non-ECC, dual-channel")]')
    }

    get highlightStorage5440(){
        return $('//div[@data-status="selected"]/span[contains(text(), "256 GB, M.2 2230, PCIe NVMe, SSD, Class 35")]')
    }

    get highlightDisplay5440(){
        return $('//div[@data-status="selected"]/span[contains(text(), "FHD (1920x1080) Non-Touch, AG, IPS, 250 nits, FHD Cam, WLAN")]')
    }

    get highlightCamera5440(){
        return $('//div[@data-status="selected"]/span[contains(text(), "FHD RGB Camera w/ Mic")]')
    }

    get highlightSystemsManagement5440(){
        return $('//div[@data-status="selected"]/span[contains(text(), "Intel vPro Management Disabled")]')
    }

    get highlightPalmRest5440(){
        return $('//div[@data-status="selected"]/span[contains(text(), "Single Pointing, No Palmrest Security Options")]')
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
        await expect(this.configuration5440Element).toExist()
        await this.configuration5440Element.click()
        await this.checkingHighlight5440Laptop()
    }

   async checkingHighlight5450Laptop(){
        await expect(this.latitude5450Title).toExist()
        await expect(this.highlightProcessor5450).toExist()
        await expect(this.highlightMemory5450).toExist()
        await expect(this.highlightStorage5450).toExist()
        await expect(this.highlightDisplay5450).toExist()
        await expect(this.highlightCamera5450).toExist()
        await expect(this.highlightSystemsManagement5450).toExist()
        await expect(this.highlightPalmRest5450).toExist()


}

async checkingHighlight5440Laptop(){
    await expect(this.latitude5440Title).toExist()
    await expect(this.highlightProcessor5440).toExist()
    await expect(this.highlightMemory5440).toExist()
    await expect(this.highlightStorage5440).toExist()
    await expect(this.highlightDisplay5440).toExist()
    await expect(this.highlightCamera5440).toExist()
    await expect(this.highlightSystemsManagement5440).toExist()
    await expect(this.highlightPalmRest5440).toExist()

}
   }
   
export default new Configuration();

