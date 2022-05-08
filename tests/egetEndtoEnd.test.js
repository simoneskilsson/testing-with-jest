const { Builder, By} = require('selenium-webdriver');
require('geckodriver');


let testedfile = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
let drivervariable;




beforeEach(async () => {
        drivervariable = await new Builder().forBrowser('firefox').build();
        await drivervariable.get(testedfile);
    });

test('checks if the text in the first header is correct', async () => {
    let title = await drivervariable.findElement(By.css('h1'))
    let expectedTitle = await title.getText();
    expect(expectedTitle).toMatch(/Hä kan vi leka med en stack/);
});

test('checks if the span is n/a', async () => {
    let span = await drivervariable.findElement(By.css('span'))
    let expectedSpan = await span.getText();
    expect(expectedSpan).toEqual("n/a");
});

