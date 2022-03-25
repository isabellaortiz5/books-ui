/// <reference types="cypress"/>

//just convention method, contains the tests. 
describe('ui_tests', () =>{

    it('example_passed_test', ()=> {

    })

    it('example_failed_test', ()=> {
        throw new Error('failed')
    })

    it('test_one', ()=> {
        //tells cypress to load the desired testing page
        cy.visit('http://localhost:4200/dashboard')
    })

})

