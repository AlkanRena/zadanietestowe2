var inputName = element(by.model('userDataNew.name'));
var inputEmail = element(by.model('userDataNew.email'));



describe("addingTool-protractor", function() {

    beforeEach(function(){
        browser.get('http://localhost:3333');
    });
    
    it('should click on it', function () {
        Terminator();
        Terminator();
        browser.pause();
    });



});
var nameForBot = "I am back";
var emailForBot = "what";


function Terminator() {
    setTimeout(BotFunction, 2000);
}

function BotFunction(nameForBot, emailForBot) {
    element(by.buttonText("Create new")).click();

    inputName.sendKeys('nameForBot');
    expect(input.getAttribute('value').toBe('name'));

    inputEmail.sendKeys('emailForBot');
    expect(input.getAttribute('value').toBe('email'));

    browser.pause();

    setTimeout(function () {
        element(by.buttonText("Save")).click();
    }, 3000);


}