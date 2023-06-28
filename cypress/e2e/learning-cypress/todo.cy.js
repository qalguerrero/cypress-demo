// Estructura de una prueba

describe("Pruebas inciales", function(){
    describe("Escenario 1", function(){
        before("", function(){
            cy.log("BEFORE")
        })
        beforeEach("",function(){})    
        it("",function(){
            cy.log("BEFORE EACH")
        })
        it ("IT 1", function(){
            cy.log("IT")       
        })
        it ("IT 2", function(){
            cy.log("IT")       
        })
        it ("IT 3", function(){
            cy.log("IT")       
        })
        afterEach("",function(){
            cy.log("AFTER EACH")  
        })
        after("",function(){
            cy.log("AFTER") 
        })
    })
 
    //it.skip para ignorar

    describe("Escenario 2", function(){
      
    })
})