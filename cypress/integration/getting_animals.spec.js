describe('Should have a list of animals', () => {
    it('Displays a title', () => {
        cy.visit('http://localhost:8000/')
        cy.get('#title').contains('Animals')
    })
})
