describe('v2-components: PortalsPopover component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=portalspopover--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PortalsPopover!');
    });
});
