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
            } else {
                console.log('test failed - wont show')
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

    it('Save The Hound',function () {
       saveUserAntz.click();
    });


    //John Snow knows nothing

    var snowEdit = browser.element(by.css('#edit_100005'));
    var snowbuttonMenu = browser.element(by.css('#singleRowButton_100005'));

    var editUserNameSnow = browser.element(by.css('#userName_100005'));
    var editUserEmailSnow = browser.element(by.css('#userEmail_100005'));

    var saveUserSnow = browser.element(by.css('#Save_100005'));

    var editWindowSnow = browser.element(by.css('#EditForm_100005'));

    it('open Snow', function () {
        browser.actions().mouseMove(snowbuttonMenu).perform();
    });

    it('Open edit Snow', function () {
        snowEdit.isDisplayed().then(function (resultEditSnow) {
            if(resultEditSnow) {
                console.log('test passed - Edit Open');
                snowEdit.click();
            } else {
             console.log('test failed - wont show ')
            }
        })
    });

    //Caution Spoiler Ahead for Serial and probably for the book
    //All below test are for testing how angular is working for changing name frequently

    it('check if John Snow is Jon Snow', function () {
        editUserNameSnow.clear();
        browser.sleep(500);
        editUserNameSnow.sendKeys('Are you Jon Snow?');
        editUserNameSnow.clear();
        browser.sleep(500);
        editUserNameSnow.sendKeys('Yes, I am Jon Snow');
        editUserNameSnow.clear();
        browser.sleep(500);
        editUserNameSnow.sendKeys('Maybe you are Jon Targaryen ?');
        editUserNameSnow.clear();
        browser.sleep(500);
        editUserNameSnow.sendKeys('It is not possible!');
        editUserNameSnow.clear();
        browser.sleep(500);
        editUserNameSnow.sendKeys('Its true your mother is Lyan Stark');
        editUserNameSnow.clear();
        browser.sleep(500);
        editUserNameSnow.sendKeys('So I am Stark and Targaryen? Is it true tree eyed reven');
        editUserNameSnow.clear();
        browser.sleep(500);
        editUserNameSnow.sendKeys('Yes, Jon you are Stark and Targaryen');
        editUserNameSnow.clear();
        browser.sleep(500);
        editUserNameSnow.sendKeys('So from that moment I will be called');
        editUserNameSnow.clear();
        browser.sleep(500);
        editUserNameSnow.sendKeys('Jon Stark-Targaryen');
    });

    it('Lets check email and change it', function () {
        editUserEmailSnow.clear();
        editUserEmailSnow.sendKeys('Jon');
        expect(editUserEmailSnow.getAttribute('value')).toBe('Jon');
        saveUserSnow.click();
        editWindowSnow.isDisplayed().then(function (windowResultSnow){
            if(windowResultSnow){
                console.log('test passed - you cant click if there is mistake');
            } else{
                console.log('test failed - window closed but it shouldnt')
            }
        });
    });

    it('Lets fix email', function () {
        expect(editUserEmailSnow.getAttribute('value')).toBe('Jon');
        editUserEmailSnow.sendKeys('@stark-targaryen.got');
        expect(editUserEmailSnow.getAttribute('value')).toBe('Jon@stark-targaryen.got')
    });

    it('Lets send him', function(){
        saveUserSnow.click();
    });

    //Its working as expected you can edit all data

});