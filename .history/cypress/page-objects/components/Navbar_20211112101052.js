export default class Navbar {
    static clickOnLogo() {
        cy.get('.brand').click()
    }

    static search(text) {
        cy.get('#searchTerm').type(`${text} {enter}`)
    }

    static displaySignInButton() {
        cy.isVisible()
    }

    static clickSignIn() {
        cy.get('#signin_button').click()
    }

    static clickSettings() {
        cy.contains('Settings').click()
    }

    static logout() {
        cy.contains('username').click()
        cy.get('#logout_link')
    }
}