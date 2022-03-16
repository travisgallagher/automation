const {By} = require('selenium-webdriver')

const movieCrossed = async (driver) => {
    
    await driver.findElement(By.xpath('//span')).click(); 
    // await driver.findElement(By.xpath('//span')).click()    

    // const movie = await driver.findElement(By.xpath('//li'))
    
    // expect(movie.text().strike()).toBeTruthy()
}

module.exports = {
    movieCrossed
}