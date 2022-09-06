// Note: For more details follow: https://www.npmjs.com/package/cypress-axe

describe('A11y test example test', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.injectAxe();
    });
    describe('when USER goes to application home page', () => {
        it('should have no detectable a11y violations on load', () => {
            // Configure aXe and test the page at initial load
            // cy.configureAxe({});
            // cy.checkA11y();
        });
    });
});
