var inputName = element(by.model('userDataNew.name'));
var inputEmail = element(by.model('userDataNew.email'));

describe("check if visible", function () {
    browser.get('http://localhost:3333');


    var elementNew = browser.findElement(by.css('#AddForm'));
    var elementEdit = browser.findElement(by.css('#EditForm'));
    var createNewButton = element(by.buttonText("Create new"));

    it('should be hidden 1', function () {

        elementNew.isDisplayed().then(function(result){
            if(result) {
                console.log('Wait I am naked')
            } else {
                console.log('I am invisible')
            }
        });
    });

    it('should be hidden 2', function () {

        elementEdit.isDisplayed().then(function(result) {
            if (result) {
                console.log("What i am true")
            } else{
                console.log("What i am false")
            }
        })
    });

    // it('should be visible', function () {
    //     createNewButton.click().then(function (result) {
    //         if (result) {
    //             console.log("Open window")
    //         } else {
    //             console.log("What window")
    //         }
    //     })
    //
    // })


});

// describe("addingTool-protractor", function() {
//
//     beforeAll("at start say this", function () {
//         browser.get('http://localhost:3333');
//
//     }
//     );
//
//     beforeEach(function(){
//
//
//         createNewButton.click();
//     });
//
//     browser.pause();
//
//     it('should click on it', function () {
//         Terminator();
//
//     });
//
//     it('should click on it', function () {
//         Terminator();
//
//     });
//
//     afterEach('should ad new', function () {
//         element(by.buttonText("Save")).click();
//     });
//
//
// });
//
// var nameForBot;
// var emailForBot;
//
// var createNewButton = element(by.buttonText("Create new"));
//
// function Terminator() {
//     nameForBot = "I am backnot";
//     emailForBot = "what";
//
//     setTimeout(BotFunction(), 2000);
// }
//
// function BotFunction(nameForBot, emailForBot) {
//
//     inputName.setValue(nameForBot);
//     expect(input.getAttribute('value').toBe('I am back'));
//
//     inputEmail.setValue(emailForBot);
//     expect(input.getAttribute('value').toBe('what'));
//
// }