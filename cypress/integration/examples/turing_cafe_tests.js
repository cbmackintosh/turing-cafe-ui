
describe('Turing Cafe', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Write tests covering what should be displayed on the page when the user first visits.', () => {
    cy.get('h1[class="app-title').contains('Turing Cafe Reservations')
    .get('input[id="name-input"]').should('exist')
    .get('input[id="date-input"]').should('exist')
    .get('select[id="time-input"]').should('exist')
    .get('input[id="number-input"]').should('exist')
    .get('button[id="make-reservation"]').should('exist')
    .get('div[class="reservation-container"]').children('div[class="reservation-card"]')
    .get('div[class="reservation-card"]').children('h2[class="reservation-name"]')
    .get('div[class="reservation-card"]').children('h3[class="reservation-date"]')
    .get('div[class="reservation-card"]').children('p[class="reservation-time"]')
    .get('div[class="reservation-card"]').children('p[class="reservation-number"]')
  })

  it('Write a test that checks that when data is put into the form, the value is reflected in that form input.', () => {
    cy.get('input[id="name-input"]').type('Cameron')
    .get('input[id="date-input"]').type("2021-04-08")
    .get('select[id="time-input"]').select("7:30 pm")
    .get('input[id="number-input"]').type(3)
  })

  it('Write a test to check the user flow of adding a new reservation to the page.', () => {
    cy.get('input[id="name-input"]').type('Cameron')
    .get('input[id="date-input"]').type("2021-04-08")
    .get('select[id="time-input"]').select("7:30 pm")
    .get('input[id="number-input"]').type(3)
    .get('button[id="make-reservation"]').click()
    cy.contains("Cameron")
    cy.contains("4/8")
    cy.contains("7:30 pm")
    cy.contains("Number of Guests: 3")
  })

})