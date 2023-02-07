let sel = require('../../fixtures/selectors.json')

beforeEach(() => {
  cy.visit('/')
})

describe('cinema site testing', () => {
  it('should successfully opens cinema site', () => {
    cy.contains('Идём').contains('кино').should('be.visible')
  })

  it('should correctly select a day of week', () => {
    let dayArray = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    let numOfDay = Math.round(Math.random() * 5) + 1 // выбор случайного дня недели
    let date = new Date()
    date.setDate(date.getDate() + numOfDay) // вычисляем дату выбранного дня
    cy.selectDay(numOfDay)
    .then (() => {
      cy.get(sel.chosenDay)
      .should('contain.text', dayArray[date.getDay()])
    })
  })

  it('should successfully pass to hall', () => {
    cy.selectDay(Math.round(Math.random() * 5) + 1) // выбор случайного дня недели
    cy.get(sel.halls)
    .then (($hallArray) => {
      let hallNumber = Math.round(Math.random() * ($hallArray.length-1)) // выбор случайного зала
      cy.wrap($hallArray).eq(hallNumber).click()
      .then (() => {
        cy.contains('Забронировать').should('be.visible')
      })
      })
  })
})