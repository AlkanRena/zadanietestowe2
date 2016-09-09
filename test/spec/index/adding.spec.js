describe("addingTool-protractor", function() {

    var inputName = element(by.model('userDataNew.name'));
    var inputEmail = element(by.model('userDataNew.email'));

    // var errorForEditName = element(by.css('#wrongNameEditForm'));
    // var errorForEditEmail = element(by.css('#wrongEmailEditForm'));

    var errorForNewName = element(by.css('#wrongNameNewForm'));
    var errorForNewEmail = element(by.css('#wrongEmailNewForm'));

    var createNewButton = browser.findElement(by.buttonText("Create New"));
    var saveNewButton = browser.findElement(by.buttonText("Save New"));
    var cancelNewButton = browser.findElement(by.buttonText("Cancel Adding"));

    afterEach(function () {
        browser.sleep(50)
    });

    it('open new window', function () {
        createNewButton.click();
    });

   it('adding Terminator', function () {
       inputName.sendKeys('Terminator');
   });

    it('checking if terminator is added', function () {
        expect(inputName.getAttribute('value')).toBe('Terminator');
    });

    it('adding Termiantor email', function () {
        inputEmail.sendKeys('Terminator@5000.t');
    });

    it('cheking if terminator email is added', function() {
        expect(inputEmail.getAttribute('value')).toBe('Terminator@5000.t');
    });

    it('save Terminator', function () {
        saveNewButton.click();
    });

    // What if passed not an email adress

    it('open new window - wrong email', function () {
        createNewButton.click();
    });

    it('adding JonSnow', function () {
        inputName.sendKeys('Jon Snow');
    });

    it('checking if JonSnow is added', function () {
        expect(inputName.getAttribute('value')).toBe('Jon Snow');
    });

    it('adding JonSnow email', function () {
        inputEmail.sendKeys('Jon no nothing');
    });

    it('cheking if JonSnow email is added', function() {
        expect(inputEmail.getAttribute('value')).toBe('Jon no nothing');
    });

    it('checking if get notify about wrong email', function(){
        errorForNewEmail.isDisplayed().then(function (user2) {
            if (user2) {
                console.log('test passed - function will change email for longer')
            } else{
                console.log('test failed')
            }
        })
    });

    it('change name Jon', function () {
        inputEmail.clear();
            inputEmail.sendKeys('jon@snow.com');
    });

    it('Is now it is truth ?', function () {
        expect(inputEmail.getAttribute('value')).toBe('jon@snow.com');
    });

    it('Should be our next user', function(){
        saveNewButton.click();
    });


    //
    // What if passed to short name ?
    //


    it('open new window - too short name', function () {
        createNewButton.click();
    });

    it('adding ant Z', function () {
        inputName.sendKeys('Z');
    });

    it('checking if name Z was added', function () {
       expect(inputName.getAttribute('value')).toBe('Z');
    });

    it('adding ant Z email', function () {
       inputEmail.sendKeys('z@antworld.com')
    });

    it('checking if its the same email', function () {
       expect(inputEmail.getAttribute('value')).toBe('z@antworld.com')
    });

    it('checking if get notify about wrong name', function(){
        errorForNewName.isDisplayed().then(function (user1) {
            if (user1) {
                console.log('test passed - function will change name for longer');
            } else{
                console.log('test failed')
            }
        })
    });

    it('change name Ant Z',function () {
        inputName.clear();
            inputName.sendKeys('Ant Z');
    });

    it('checking if name Z was added', function () {
        expect(inputName.getAttribute('value')).toBe('Ant Z');
    });

    it('Should be our next user', function(){
        saveNewButton.click();
    });


    //
    // What will happen if you click Cancel ?
    //

    it('open new window - cancel', function () {
       createNewButton.click();
    });

    it('adding Mr.Nobody', function(){
        inputName.sendKeys('Mr.Nobody');
    });

    it('adding Mr.Nobody Email', function () {
        inputEmail.sendKeys('mr.nobody@email.com');
    });

    it('check if form got data', function () {
        expect(inputName.getAttribute('value')).toBe('Mr.Nobody');
        expect(inputEmail.getAttribute('value')).toBe('mr.nobody@email.com');
    });

    it('click cancel and reopen',function () {
        cancelNewButton.click();
        createNewButton.click();
    });

    it('check if clear', function () {
        expect(inputName.getAttribute('value')).toBe('');
        expect(inputEmail.getAttribute('value')).toBe('');
    });

    it('close form', function () {
        cancelNewButton.click();
        console.log('second test done');
        browser.sleep(2000);

    })

});