describe("addingTool-protractor", function() {

    browser.get('http://localhost:3333');

    var inputName = element(by.model('userDataNew.name'));
    var inputEmail = element(by.model('userDataNew.email'));

    var errorForEditName = element(by.css('#wrongNameEditForm'));
    var errorForEditEmail = element(by.css('#wrongEmailEditForm'));

    var errorForNewName = element(by.css('#wrongNameNewForm'));
    var errorForNewEmail = element(by.css('#wrongEmailNewForm'));

    var createNewButton = browser.findElement(by.buttonText("Create New"));
    var saveNewButton = browser.findElement(by.buttonText("Save New"));

    afterEach(function () {
        browser.sleep(500)
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
        errorForNewEmail.isDisplayed().then(function (wrongemailtest) {
            if (wrongemailtest) {
                console.log('test passed - function will change email for longer');
                inputEmail.clear().then(
                    inputEmail.sendKeys('jon@snow.com')
                )
            } else{
                console.log('test failed')
            }
        })
    });

    it('Is now it is truth ?', function () {
        expect(inputEmail.getAttribute('value')).toBe('jon@snow.com');
    });

    it('Should be our next user', function(){
        saveNewButton.click();
    });

    // What if passed to short name ?

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
        errorForNewName.isDisplayed().then(function (wrongnametest) {
            if (wrongnametest) {
                console.log('test passed - function will change name for longer');
                inputName.clear().then(
                    inputName.sendKeys('Ant Z')
                )
            } else{
                console.log('test failed')
            }
        })
    });

    it('Should be our next user', function(){
        saveNewButton.click();
    });

    // What will happen if you click Cancel ?

});