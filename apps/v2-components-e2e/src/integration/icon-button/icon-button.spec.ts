describe('v2-components: IconButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconbutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to IconButton!');
    });
});
