describe('v1-components: V1Components component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=v1components--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to V1Components!');
    });
});
