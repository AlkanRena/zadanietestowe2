describe("Editing-Tool-protractor", function(){

    afterEach(function () {
        browser.sleep(500);
    });

    it('start new test - Edit', function () {
        console.log('Editing Test');
    });

    // Terminator edit files test

    var terminatorEdit = browser.element(by.css('#edit_100004'));
    var terminatorbuttonMenu = browser.element(by.css('#singleRowButton_100004'));

    var editUserNameTerminator = browser.element(by.css('#userName_100004'));
    var editUserEmailTerminator = browser.element(by.css('#userEmail_100004'));

    var saveUserTerminator = browser.element(by.css('#Save_100004'));

    it('Open Terminator', function () {
        browser.actions().mouseMove(terminatorbuttonMenu).perform();
    });

    it('Open Edit Terminator', function () {
                terminatorEdit.isDisplayed().then(function (resultEditTerminator) {
                    if (resultEditTerminator) {
                        console.log('test passed - Edit Open');
                        terminatorEdit.click()
                    } else {
                        console.log('test failed - wrong adress or something else')
                    }
                })
    });
    
    it('I will be back - Terminator', function () {
        expect(editUserNameTerminator.getAttribute('value')).toBe('Terminator');
        editUserNameTerminator.sendKeys(' I will be back!');
    });

    it('Is Terminator a Mountain ?', function(){
        editUserNameTerminator.clear();
        expect(editUserNameTerminator.getAttribute('value')).toBe('');
        editUserNameTerminator.sendKeys('Mountain')
    });

    it('Edit Mountain email ?', function () {
        editUserEmailTerminator.clear();
        expect(editUserEmailTerminator.getAttribute('value')).toBe('');
        editUserEmailTerminator.sendKeys('gregor@clagne.got');
    });

    it('Lets save mountain', function () {
        saveUserTerminator.click()
    });

    //Ant Z edit files test

    var antzEdit = browser.element(by.css('#edit_100006'));
    var antzbuttonMenu = browser.element(by.css('#singleRowButton_100006'));

    var editUserNameAntz = browser.element(by.css('#userName_100006'));
    var editUserEmailAntZ = browser.element(by.css('#userEmail_100006'));

    var saveUserAntz = browser.element(by.css('#Save_100006'));

    it('open Ant Z ', function () {
        browser.actions().mouseMove(antzbuttonMenu).perform();
    });

    it('Open Edit Ant Z', function () {
        antzEdit.isDisplayed().then(function (resultEditAntz) {
            if(resultEditAntz) {
                console.log('test passed - Edit Open');
                antzEdit.click();
            }
        })
    });

    it('I am not Ant Z', function () {
        expect(editUserNameAntz.getAttribute('value')).toBe('Ant Z');
        editUserNameAntz.sendKeys(' i am not this')
    });

    it('Save and reopen', function(){
        saveUserAntz.click();
        browser.actions().mouseMove(antzbuttonMenu).perform();
        antzEdit.click();
        expect(editUserNameAntz.getAttribute('value')).toBe('Ant Z i am not this')
    });

    it('I am the Hound', function(){
        editUserNameAntz.clear();
        expect(editUserNameAntz.getAttribute('value')).toBe('');
        editUserNameAntz.sendKeys('Hound')
    });

    it('Pass email adress', function(){
        editUserEmailAntZ.clear();
        expect(editUserEmailAntZ.getAttribute('value')).toBe('');
        editUserEmailAntZ.sendKeys('sandor@clagne.got');
    });

    //John Snow knows nothing
    var snowEdit = browser.element(by.css('#edit_100006'));
    var snowbuttonMenu = browser.element(by.css('#singleRowButton_100006'));

    var editUserNameSnow = browser.element(by.css('#userName_100006'));
    var editUserEmailSnow = browser.element(by.css('#userEmail_100006'));

    var saveUserSnow = browser.element(by.css('#Save_100006'));

});