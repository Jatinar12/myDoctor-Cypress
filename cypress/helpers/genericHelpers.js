class Helpers {

    click(element) {
        element.click()
    }
    shouldBeVisible(element) {
        element.should('be.visible')
    }
    type(element, value) {
        element.type(value)
    }
    select(element, type) {
        element.select(type).then(function () {
            cy.log("Element is selected");
        },
            function (err) {
                cy.log("Element is not selected");
            });
    }
    getNumber(length) {
        return Math.floor(Math.pow(10, 10 - 1) + Math.random() * 9 * Math.pow(10, 10 - 1))
    }
    getMail() {
        var candidates = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var randomemail = "",
            rand;
        for (var i = 0; i < 1; i++) {
            for (var j = 0; j < 8; j++) {
                rand = Math.floor(Math.random() * candidates.length);
                randomemail += candidates.charAt(rand);
            }
            randomemail += "@gmail.com";
        }
        return randomemail;
    }

    getText(element) {
        return cy.get(element).invoke('text').then((text)=> {
            cy.wrap(text).as('SpecialityCard');
            cy.log("The text of element is capture");
        },
        function(err) {
            cy.log("Error: The text of the element couldn't be captured");
        });
        }
       
        // getNumber(element) {
        //     return cy.get(element).invoke('text').then((text)=> {
        //         cy.wrap(text).as('Number');
        //         cy.log("The text of element is capture");
        //     },
        //     function(err) {
        //         cy.log("Error: The text of the element couldn't be captured");
        //     });
        //     }   
}
export default Helpers