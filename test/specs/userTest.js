//import { expect } from '@wdio/globals'
import login from '../pageobjects/DellTest.js'
import FinalProject from '../pageobjects/DellTest.js'

describe('My Final Project Application', () => {
    it('should navigate the products page', async () => {
        await FinalProject.goToUrl()
        await FinalProject.burguerMenu()
        await FinalProject.ComputerAccesories()
        await FinalProject.laptops()
        await FinalProject.latitud()
        await FinalProject.latitude5440()
        await FinalProject.latitude5440Img1()
        await FinalProject.latitude5440Img2()
        await FinalProject.latitude5440Img3()
        await FinalProject.latitude5440Video()
        await FinalProject.latitude5440Img4()
        await FinalProject.latitude5440Img5()
        await FinalProject.latitude5440Img6()
        await FinalProject.latitude5440Img7()
        await FinalProject.latitude5440Img8()
        await FinalProject.latitude5440Img9()
        await FinalProject.UpButton()
              
    })
})


