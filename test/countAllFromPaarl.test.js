describe('The AllFromPaarl function', function(){
    it('Should count all the registrations from Paarl', function(){
        assert.equal("CJ 678 543", allPaarl("CJ 678 543", "CJ 67890"));
    })
})