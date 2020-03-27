/// <reference types="cypress" />;
describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1920, 969)
    
       cy.visit('http://localhost:3000')
    
       cy.get('body > #root > div:nth-child(7) > .select-box--container > .select-box--arrow').click()
    
       cy.get('#root > div:nth-child(7) > .select-box--container > div > div:nth-child(3)').click()
    
       cy.get('body > #root > div:nth-child(10) > .select-box--container > .select-box--arrow').click()
    
       cy.get('#root > div:nth-child(10) > .select-box--container > div > div:nth-child(3)').click()
    
       cy.get('body > #root > div:nth-child(13) > input:nth-child(1)').click()
    
       cy.get('body > #root > div:nth-child(13) > input:nth-child(1)').check('on')
    
       cy.get('body > #root > div > input:nth-child(3)').click()
    
       cy.get('body > #root > div > input:nth-child(3)').check('on')
    
       cy.get('body > #root > div > input:nth-child(5)').click()
    
       cy.get('body > #root > div > input:nth-child(5)').check('on')
    
       cy.get('body > #root > form > label > input').click()
    
       cy.get('body > #root > form > label > input').type('test')
    
       cy.get('body > #root > form > input').click()
    
       cy.visit('http://localhost:3000/?name=test')
    
    })
   
   })
   