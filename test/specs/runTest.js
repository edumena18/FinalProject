//import { expect } from '@wdio/globals'
//import login from '../pageobjects/menuMenu.js'
import mainMenu from '../pageobjects/mainMenu.js'
import Product from '../pageobjects/5440laptop.js'
import PopUp from '../pageobjects/popUp.js'

describe('My Final Project Application', () => {
    it('should navigate the products page', async () => {
      await PopUp.laptopPopUpCatch()
             
    })
})