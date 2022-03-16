const {Builder, Capabilities} = require("selenium-webdriver");
const { addMovie } = require("../functions/addMovie");
const { movieCrossed } = require("../functions/crossedOut");
const { deleteMovie } = require("../functions/deleteMovie"); 

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

beforeAll(async () => {
    await driver.get(`http://127.0.0.1:5500/movieList/index.html`); 
}); 

afterAll(async () => {
    await driver.quit(); 
}); 

test("Add a movie to the list", async () => {
    // to delete movie we have to add movie;
    await addMovie(driver);
    await driver.sleep(3000); 
})

test('cross off movie from the list', async () => {
    await movieCrossed(driver)
    await driver.sleep(1000)
})


test('deletes movie from the list', async () => {
    await deleteMovie(driver)
    await driver.sleep(1000)
})