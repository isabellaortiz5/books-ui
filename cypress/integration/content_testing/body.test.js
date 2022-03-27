/// <reference types="cypress"/>

describe("delete user func test", () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:4200/dashboard')
    }) 

    it("Loaded body state",() =>{
        cy.get('[nztype="default"]')
        .invoke('attr',"ng-reflect-disabled").should("eq","true")

        cy.get(".table-button.ant-btn.ant-btn-primary").should("be.visible")

        cy.get(':nth-child(n) > :nth-child(n) > .ant-btn').should("be.visible") 
    })

    it("check all boxes",() =>{
        cy.get('.ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        
        cy.get(':nth-child(n) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
        .invoke('attr',"ng-reflect-model")
        .should("eq","true")

        cy.get('[nztype="default"]')
        .invoke('attr',"ng-reflect-disabled").should("eq","false")
    })

    it("check single box",() =>{
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
        .check()

        cy.get('span.ant-checkbox-indeterminate').should("exist")

        cy.get('[nztype="default"]')
        .invoke('attr',"ng-reflect-disabled").should("eq","false")
    })

})