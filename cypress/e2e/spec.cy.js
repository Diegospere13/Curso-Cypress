/// <reference types="Cypress" />

describe('Aprendendo conceitos Cypress', () => {

    it.only('1 - Usuário faz login com username e senha inválidos', () => {
        cy.visit('/');
        cy.get('div.shop-menu').contains('Login').click();
        
        cy.contains('Login to your account');

        cy.get('[data-qa="login-email"]').type('teste@email.com');
        //cy.get('input[name="email"]').click(); //dá errado porque existe mais de um input com nome "email"
        //cy.get('.login-form').find('input[name="email"]'); // Esse já funcionaria, pois primeiro foi acessado o pai do elemento login, e por último o elemento "email"

        cy.get('[data-qa="login-password"]').type('123456');

        cy.get('[data-qa="login-button"]').contains('Login').click();

        cy.contains('Your email or password is incorrect!');
    })

})