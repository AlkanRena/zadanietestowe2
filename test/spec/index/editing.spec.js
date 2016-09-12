describe("Editing-Tool-protractor", function(){

    afterEach(function () {
        browser.sleep(1000);
    });

    it('start new test - Edit', function () {
        console.log('Editing Test');
    });

    // Terminator edit files test

    it('Open Terminator', function () {
        var terminatorbuttonMenu = browser.element(by.css('#singleRowButton_100004'));

        browser.actions().mouseMove(terminatorbuttonMenu).perform();
    });

    it('Edit Terminator', function () {
        var terminatorEdit = browser.element(by.css('#edit_100004'));

                terminatorEdit.isDisplayed().then(function (resultEditTerminator) {
                    if (resultEditTerminator) {
                        console.log('test passed - Edit Shown');
                        terminatorEdit.click()
                    } else {
                        console.log('test failed - wrong adress or something else')
                    }
                })


    })
});