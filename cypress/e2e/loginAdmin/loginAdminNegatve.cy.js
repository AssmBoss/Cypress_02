let login = require('../../fixtures/loginData.json')
let sel = require('../../fixtures/selectors.json')

beforeEach(() => {
    cy.visit('/admin')
  })

describe('fail login to admin cinema site testing', () => {

    it('should login fail with wrong mail', () => {
        cy.login(login.sad.mail, login.happy.pass)
        .then (() => {
            cy.contains('Ошибка авторизации!').should('be.visible')
        })
    })

    it('should login fail with wrong pass', () => {
        cy.login(login.happy.mail, login.sad.pass)
        .then (() => {
            cy.contains('Ошибка авторизации!').should('be.visible')
        })
    })

    it('should login fail with empty mail', () => {
        cy.get(sel.loginTitle).should('have.text', 'Авторизация')
        .then (() => {
            cy.get(sel.passField).type(`${login.happy.pass}`) 
            .then (() => {
                cy.contains('Авторизоваться').click()
                .then (() => {
                    cy.get(sel.mailField).then($el => $el[0].checkValidity()).should('be.false')
                })
            })
        })
    })

    it('should login fail with empty pass', () => {
        cy.get('.login__title').should('have.text', 'Авторизация')
        .then (() => {
            cy.get('[type="email"]').type(`${login.happy.mail}`) 
            .then (() => {
                cy.contains('Авторизоваться').click()
                .then (() => {
                    cy.get('[type="password"]').then($el => $el[0].checkValidity()).should('be.false')
                })
            })
        })
    })
})