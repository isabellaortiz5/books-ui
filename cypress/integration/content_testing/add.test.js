/// <reference types="cypress"/>

describe("add user func test", () =>{
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard')  
    }) 

    it("Add button",() =>{
        cy.get(".table-button.ant-btn.ant-btn-primary").click()
        cy.get('.ant-modal-header').should("exist")    
    })
    it("Cancel add button",() =>{
        cy.get(".table-button.ant-btn.ant-btn-primary").click()
        cy.get('.ant-modal-footer > [nztype="default"]').click()
        cy.get('.ant-modal-header').should("not.exist")    
    })
})



