describe('v2-components: ProfilePopOver component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=profilepopover--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProfilePopOver!');
    });
});
