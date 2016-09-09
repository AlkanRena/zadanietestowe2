describe("check if visible", function () {
    browser.get('http://localhost:3333');


    var elementNew = browser.findElement(by.css('#AddForm'));
    var elementEdit = browser.findElement(by.css('#EditForm'));
    var createNewButton = browser.findElement(by.buttonText("Create new"));
    var cancelNewButton = browser.findElement(by.buttonText("Cancel Adding"));

    it('should be hidden 1', function () {

        elementNew.isDisplayed().then(function(result1){
            if(result1) {
                console.log('Wait I am naked')
            } else {
                console.log('I am invisible')
            }
        });
    });

    it('should be hidden 2', function () {

        elementEdit.isDisplayed().then(function(result2) {
            if (result2) {
                console.log("What i am true")
            } else{
                console.log("What i am false")
            }
        })
    });

    it('should be visible Adding Window', function () {
        createNewButton.click();
        console.log('I clicked');
            elementNew.isDisplayed().then(function (result3) {
            if (result3 == true) {
                console.log('You can see me');
            } else {
                console.log("What window Add")
            }
        });
    });
    it('should be hidden Adding Window', function () {
        cancelNewButton.click();
        console.log('I clicked second time');
        elementNew.isDisplayed().then(function (result3) {
            if (result3 == true) {
                console.log('You can see me')
            } else {
                console.log("What window Add")
            }
        });
    })

});