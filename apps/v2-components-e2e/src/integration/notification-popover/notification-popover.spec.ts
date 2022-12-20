describe('v2-components: NotificationPopover component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=notificationpopover--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to NotificationPopover!');
    });
});
