let sel = require('../fixtures/selectors.json')

beforeEach(() => {
    cy.visit('/')
  })
  
  describe('booking chair in the hall', () => {
  
    it('should successfully booking chair and get QR', () => {
        cy.goToRandomHall()
          .then (() => {
            cy.getFreeRandomChair()
            .then (() => {
                cy.contains('Забронировать').click()
                .then (() => {
                    cy.contains('Получить код бронирования').click()
                    .then (() => {
                        cy.get(sel.qr).should('be.visible')
                    })
                })
            })
        })
    })
})