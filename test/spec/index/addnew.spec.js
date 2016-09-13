describe('If possible to add new user after delating all', function () {

    afterEach(function () {
        browser.sleep(150);
    });

    //I am back

    var inputName = element(by.model('userDataNew.name'));
    var inputEmail = element(by.model('userDataNew.email'));

    var createNewButton = browser.findElement(by.buttonText("Create New"));
    var saveNewButton = browser.findElement(by.buttonText("Save New"));

    it('Terminator', function(){
        createNewButton.click();
    });

    it('Check if clear', function () {
        expect(inputName.getAttribute('value')).toBe('');
        expect(inputEmail.getAttribute('value')).toBe('');
    });

    it('Lets get you a name', function () {
        inputName.sendKeys('Terminator');
        expect(inputName.getAttribute('value')).toBe('Terminator');
    });

    it('Now email', function () {
        inputEmail.sendKeys('terminator@t.5000');
        expect(inputEmail.getAttribute('value')).toBe('terminator@t.5000');
    });

    it('Send Terminator', function () {
        saveNewButton.click();
    })
});