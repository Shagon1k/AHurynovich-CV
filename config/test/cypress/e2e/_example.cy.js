describe('E2E test example test', () => {
    describe('when USER goes to application home page with EN locale', () => {
        before(() => {
            cy.visit('/', {
                onBeforeLoad(win) {
                    Object.defineProperty(win.navigator, 'language', {
                        value: 'en',
                    });
                },
            });
        });

        describe('and views default home page', () => {
            it('should have default text for "Testing name"', () => {
                cy.findByText('Testing name').should('exist');
            });
        });

        describe('and clicks "Make Hello" button', () => {
            it('should change text to russian language', () => {
                cy.findByRole('button', { name: 'Make Hello' }).click();

                cy.findByText('Имя для теста').should('exist');
            });
        });
    });
});
