describe('Should have a list of animals', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/')
    })
    it('Displays a title', () => {
        cy.get('#title').contains('Animals')
    })
    it('Displays a list of animals', () => {
        
    })
})
