/// <reference types="cypress"/>

describe("delete user func test", () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:4200/dashboard')
    }) 

    it("Loaded add state",() =>{
        cy.get('[nztype="default"]')
        .invoke('attr',"ng-reflect-disabled").should("eq","true")

    })

    it("delete all",() =>{
        cy.get('.ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check()
        
        cy.get('[nztype="default"]')
        .invoke('attr',"ng-reflect-disabled")
        .should("eq","false")
    })

    it("single delete",() =>{
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
        .check()

        cy.get('[nztype="default"]')
        .invoke('attr',"ng-reflect-disabled")
        .should("eq","false")
    })

})





