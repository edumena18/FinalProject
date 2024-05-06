import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class TestClass {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    goToUrl (endpoint) {
        return browser.url(`https://www.dell.com/en-us/${endpoint}`)
    }
}
