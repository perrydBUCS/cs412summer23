// e2e/integration/weather-test.js
describe('Weather Component E2E tests', () => {
  beforeEach(() => {
    // Assume your angular app is running on http://localhost:4200
    cy.visit('http://localhost:4200');
  });

  it('should display weather data when form is submitted', () => {
    // Fill out the form
    cy.get('[data-cy=city-input]').type('Boston');
    cy.get('[data-cy=state-input]').type('MA');

    // Submit the form
    cy.get('[data-cy=submit-button]').click();

    // Check for the presence of results on the page
    cy.get('[data-cy=temperature]').should('be.visible');
    cy.get('[data-cy=humidity]').should('be.visible');
    cy.get('[data-cy=pressure]').should('be.visible');
  });
});
