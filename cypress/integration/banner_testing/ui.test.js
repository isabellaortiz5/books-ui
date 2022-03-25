/// <reference types="cypress"/>

describe("left banner test", () =>{
    it("Closing banner",() =>{
        cy.visit('http://localhost:4200/dashboard')

        cy.get("nz-sider")
        .invoke("attr","ng-reflect-nz-collapsed")
        .should("eq","false")

        cy.get('.header-trigger').click()

        cy.get("nz-sider")
        .invoke("attr","ng-reflect-nz-collapsed")
        .should("eq","true")
    })

    it("Opening banner",() =>{
        cy.get("nz-sider")
        .invoke("attr","ng-reflect-nz-collapsed")
        .should("eq","true")

        cy.get('.header-trigger').click()

        cy.get("nz-sider")
        .invoke("attr","ng-reflect-nz-collapsed")
        .should("eq","false")
    })

    it("Link correctitude",() =>{
        cy.get("a")
        .eq(0)
        .invoke("attr", "href")
        .should("eq","https://ng.ant.design/")
    })

    it("Validate link",() =>{
        cy.get('a')
        .eq(0)
        .invoke('attr', 'href')
        .then(href => {

        cy.request(href)
        .its('status')
        .should('eq', 200);

        });
    })

    it("Validate img src",() =>{
        cy.get('img')
        .eq(0)
        .invoke('attr', 'src')
        .then(href => {

        cy.request(href)
        .its('status')
        .should('eq', 200);

        });
    })

})

