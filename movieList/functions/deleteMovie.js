const {By} = require('selenium-webdriver'); 

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//button[text()="x"]')).click(); 

    // await driver.findElement(By.xpath('//button[text()="x"]')).click(); 
    // const movie = await driver.findElement(By.xpath('//li')); 
    // expect(movie.isDisplayed()).toBeFalsy(); 
}; 

module.exports = {
    deleteMovie
};