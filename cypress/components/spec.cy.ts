describe('MuseumCardComponent', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('should change image in wishlist button when clicked', () => {
        cy.get('app-museum-card').should('exist').within(() => {
            cy.get('.fav-btn').should('exist').then(($button) => {

                const initialSrc = $button.find('img').attr('src');

                cy.get('.fav-btn').click();
                const newSrc = $button.find('img').attr('src');
                expect(newSrc).not.to.equal(initialSrc);
            });
        });
    });
});
