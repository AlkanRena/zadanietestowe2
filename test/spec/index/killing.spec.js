describe('Lets be GRRM',function () {

    beforeEach(function () {
        browser.sleep(50)
    });

    //Kill Ned Stark

    var nedKill = browser.element(by.css('#delate_100001'));
    var nedbuttonMenu = browser.element(by.css('#singleRowButton_100001'));

    it('Lets kill one of Stark', function () {
        browser.actions().mouseMove(nedbuttonMenu).perform();
        nedKill.isDisplayed().then(function (resultKillNed) {
            if(resultKillNed) {
                console.log('test passed - Edit Open');
                nedKill.click()
            } else {
                console.log('test failed - you nothing')
            }
        })
    });

    //Kill Stannis - wrong guy

    var stannisKill = browser.element(by.css('#delate_100003'));
    var stannisbuttonMenu = browser.element(by.css('#singleRowButton_100003'));

    it('Lets kill not good one', function () {
        browser.actions().mouseMove(stannisbuttonMenu).perform();
        stannisKill.isDisplayed().then(function (resultKillStannis) {
            if(resultKillStannis) {
                console.log('test passed - Edit Open');
                stannisKill.click()
            } else {
                console.log('test failed - you nothing')
            }
        })
    });

    //Kill Moutain and Hound - wrong guy

    var moutainKill = browser.element(by.css('#delate_100004'));
    var moutainbuttonMenu = browser.element(by.css('#singleRowButton_100004'));

    var houndKill = browser.element(by.css('#delate_100006'));
    var houndbuttonMenu = browser.element(by.css('#singleRowButton_100006'));

    it('Lets kill Moutain', function () {
        browser.actions().mouseMove(moutainbuttonMenu).perform();
        moutainKill.isDisplayed().then(function (resultKillMoutain) {
            if(resultKillMoutain) {
                console.log('test passed - Edit Open');
                moutainKill.click()
            } else {
                console.log('test failed - you nothing')
            }
        })
    });

    it('Lets kill Hound', function () {
        browser.actions().mouseMove(houndbuttonMenu).perform();
        houndKill.isDisplayed().then(function (resultKillHound) {
            if(resultKillHound) {
                console.log('test passed - Edit Open');
                houndKill.click()
            } else {
                console.log('test failed - you nothing')
            }
        })
    });

    //Lets check if Arya and John still there

    var aryaUserNameSeen = browser.element(by.css('#userName_100002'));
    var jonUserNameSeen = browser.element(by.css('userName_100005'));

    it('Arya should be here', function () {
        aryaUserNameSeen.isDisplayed().then(function (resultSeenArya) {
            if(resultSeenArya) {
                console.log('test passed - user still here');
            } else {
                console.log('test failed - user is not here');
            }
        })
    });

    it('Jon should be here', function () {
        jonUserNameSeen.isDisplayed().then(function (resultSeenJon) {
            if(resultSeenJon) {
                console.log('test passed - user still here');
            } else {
                console.log('test failed - user is not here');
            }
        })
    });

    // Lets clear all

    var aryaKill = browser.element(by.css('#delate_100002'));
    var aryabuttonMenu = browser.element(by.css('#singleRowButton_100002'));

    var jonKill = browser.element(by.css('#delate_100005'));
    var jonbuttonMenu = browser.element(by.css('#singleRowButton_100005'));

    it('Lets kill Arya', function () {
        browser.actions().mouseMove(aryabuttonMenu).perform();
        aryaKill.isDisplayed().then(function (resultKillArya) {
            if(resultKillArya) {
                console.log('test passed - Edit Open');
                aryaKill.click()
            } else {
                console.log('test failed - you nothing')
            }
        })
    });

    it('Lets kill Jon', function () {
        browser.actions().mouseMove(jonbuttonMenu).perform();
        jonKill.isDisplayed().then(function (resultKillJon) {
            if(resultKillJon) {
                console.log('test passed - Edit Open');
                jonKill.click()
            } else {
                console.log('test failed - you nothing')
            }
        })
    });
});