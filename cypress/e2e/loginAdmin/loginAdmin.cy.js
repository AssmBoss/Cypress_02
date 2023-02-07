let login = require('../../fixtures/loginData.json')
let sel = require('../../fixtures/selectors.json')

beforeEach(() => {
    cy.visit('/admin')
  })

describe('login to admin cinema site testing', () => {

    it('should come to admin login page', () => {
        cy.get(sel.loginTitle).should('have.text', 'Авторизация')
    })

    it('should successfully admin login', () => { //
        cy.login(login.happy.mail, login.happy.pass)
        .then (() => {
            cy.get(sel.controlHall)
            .then (($obj) => {
                expect($obj.length).to.equal(1)
            })
        })       
    })
})