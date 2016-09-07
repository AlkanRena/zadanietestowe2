describe("addingTool-protractor", function() {



    var ptor = browser.get('http://localhost:3333');

    describe("index", function(){
        it('should be alive', function (){

            expect(browser.getTitle()).toBe('Zadanie Testowe');
        })
    });
    describe('addsomething', function () {
        it('should add new user', function(){

        })
    })
});

