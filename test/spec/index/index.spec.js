describe("check if visible or not - Index side of page", function () {


    browser.get('http://localhost:3333');
    
    var elementNew = browser.findElement(by.css('#AddForm'));
    var elementEdit = browser.findElement(by.css('#EditForm'));
    var createNewButton = browser.findElement(by.buttonText("Create new"));
    var cancelNewButton = browser.findElement(by.buttonText("Cancel Adding"));
    var buttonMenu = browser.findElement(by.css('.singleRowButton'));
    var editOldButton = browser.findElement(by.buttonText("Edit"));
    var editOldCancelInsideButton = browser.findElement(by.buttonText("Cancel Edit"));

    it('should be hidden 1', function () {

        elementNew.isDisplayed().then(function(result1){
            if(result1) {
                console.log('bug - Wait I am naked')
            } else {
                console.log('test passed - I am invisible')
            }
        });
    });

    it('should be hidden 2', function () {

        elementEdit.isDisplayed().then(function(result2) {
            if (result2) {
                console.log("bug - What i am true")
            } else{
                console.log("test passed - What i am false")
            }
        })
    });

    it('should be visible Adding Window', function () {
        createNewButton.click();
        console.log('I clicked');
            elementNew.isDisplayed().then(function (result3) {
            if (result3) {
                console.log('test passed - You can see me');
            } else {
                console.log("test failed - What window Add")
            }
        });
    });
    
    it('should be hidden Adding Window', function () {
        cancelNewButton.click();
        console.log('I clicked second time');
        elementNew.isDisplayed().then(function (result4) {
            if (result4) {
                console.log('bug - You can see me')
            } else {
                console.log("test passed - What window Add")
            }
        });
    });
    
    it('should be visible if hover on', function () {
        browser.actions().mouseMove(buttonMenu).perform().then(
            function () {
                console.log('Mouse Moved');
                editOldButton.isDisplayed().then(function (result5) {
                    if (result5) {
                        console.log('test passed - Edit button is shown')
                    } else {
                        console.log('bug - There nothing John Snow')
                    }
                })
            }
        );
    });
    
    it('should open edit window', function () {
        editOldButton.click();
        elementEdit.isDisplayed().then(function (result6) {
            if (result6) {
                console.log('test passed - you see open edit window');
            } else {
                console.log('bug - you dont see me')
            }
        })
    });

    it('should close edit window', function () {
        editOldCancelInsideButton.click();
        elementEdit.isDisplayed().then(function (result7) {
            if (result7) {
                console.log('Bug - Why I am here')
            } else {
                console.log('test passed - True even if its false')
            }

        })
    });

    it('should pass the same result as at start', function () {
        elementNew.isDisplayed().then(function (result8) {
            if (result8) {
                console.log('bug - shouldnt be seen');
                console.log('First re-test done');
            } else {
                console.log('test passed - object has value false');
                console.log('First re-test done');
            }
        });

        elementEdit.isDisplayed().then(function (result9) {
            if (result9) {
                console.log('bug - shouldnt be seen');
                console.log('Second re-test done');
            } else {
                console.log('test passed - object has value false second time');
                console.log('Second re-test done');
            }
        });
    })
});