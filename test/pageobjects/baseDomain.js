import { browser } from '@wdio/globals'

export default class TestClass {
    
    goToUrl (endpoint) {
        return browser.url(`https://www.dell.com/en-us/${endpoint}`)
    }
}
