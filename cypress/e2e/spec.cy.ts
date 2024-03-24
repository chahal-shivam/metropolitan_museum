describe('Metro Museum', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display cards with data from API', () => {
    cy.wait(10000);
    cy.get('app-museum-card').should('be.visible');
    cy.get('app-museum-card').should('have.length', 30);
  });

  it('should navigate to detail component when card is clicked', () => {
    cy.wait(10000);
    cy.get('app-museum-card').first().find('.card-image').click();
    cy.wait(10000);
    cy.url().should('include', '/details');
    cy.get('app-details').should('be.visible');

  });

  it('should display clicked image in main image container', () => {
    cy.get('app-museum-card').first().find('.card-image').click();
    cy.wait(10000);
    cy.get('app-details .thumbnails').should('exist');
    cy.get('app-details .thumbnails img').then($thumbnails => {
      if ($thumbnails.length > 0) {
        cy.get('app-details .thumbnails img:first-child').click();

        cy.get('app-details .thumbnails img:first-child').invoke('attr', 'src').then((src) => {
          cy.get('app-details .main-image img').should('have.attr', 'src', src);
        });
      } else {
        cy.log('No images available in thumbnails container. Skipping test.');
      }
    });

  });



});
