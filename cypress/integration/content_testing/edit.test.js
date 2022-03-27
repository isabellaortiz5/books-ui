/// <reference types="cypress"/>

describe("edit user func test", () =>{
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard') 
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click()
    })

    it("edit book",() =>{
        cy.get('.ant-modal-header').eq(0).should("exist")   
        cy.url().should("include", "/dashboard") 
    })

    it("Loaded edit state",() =>{
        cy.get('.ant-modal-header').eq(0).should("exist")

        cy.contains('Save')
        .invoke('attr',"ng-reflect-disabled").should("eq","false")

        cy.get('.ant-modal-header').eq(0)
        .should("contain","Edit Book")

        cy.get("#name").should("not.be","empty")
        cy.get("#author").should("not.be","empty")
    })

    it("Cancel edit button",() =>{
        cy.get('.ant-modal-footer > [nztype="default"]').click()
        cy.get('.ant-modal-header').eq(0).should("not.exist")
        cy.url().should("include", "/dashboard")
    })

    it("close edit tab",() =>{
        cy.get('.ant-modal-close-x').click
        cy.get('.ant-modal-header').eq(0).should("not.exist")
        cy.url().should("include", "/dashboard")
    })

    it("empty fields edit",() =>{
        cy.get("#name").focus().clear()
        cy.get("#author").focus().clear()

        cy.get('.ant-modal-footer > .ant-btn-primary')
        .invoke('attr',"ng-reflect-disabled").should("eq","true")
    })

})





