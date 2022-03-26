/// <reference types="cypress"/>

describe("add user func test", () =>{
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard') 
        cy.get(".table-button.ant-btn.ant-btn-primary").click()
    })

    it("Loaded add state",() =>{
        cy.get('.ant-modal-header').eq(0).should("exist")
        cy.contains('Save')
        .invoke('attr',"ng-reflect-disabled").should("eq","true")

        cy.get('.ant-modal-header').eq(0)
        .should("contain","Add Book")
    })
    
    it("Add button",() =>{
        cy.get('.ant-modal-header').eq(0).should("exist")   
        cy.url().should("include", "/dashboard") 
    })

    it("Cancel add button",() =>{
        cy.get('.ant-modal-footer > [nztype="default"]').click()
        cy.get('.ant-modal-header').eq(0).should("not.exist")
        cy.url().should("include", "/dashboard")
    })

    it("close add tab",() =>{
        cy.get('.ant-modal-close-x').click
        cy.get('.ant-modal-header').eq(0).should("not.exist")
        cy.url().should("include", "/dashboard")
    })

    it("not empty fields add",() =>{
        cy.get("#name").click()
        cy.get("#name").type("Cien años de soledad")
        cy.get("#author").type("Gabriel García Márquez")
        cy.contains('Save')
        .invoke('attr',"ng-reflect-disabled").should("eq","false")
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.get('.ant-modal-header').eq(0).should("not.exist")
        cy.url().should("include", "/dashboard")
    })
})





