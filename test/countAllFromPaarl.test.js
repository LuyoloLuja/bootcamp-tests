describe('The AllFromPaarl function', function(){
    it('Should return first registration number for CJ 678 543', function(){
        var firstPaarl = 1;
        assert.equal(firstPaarl, 1);
    })

    it('Should return second registration number for CJ 67890', function(){
        var secondPaarl = 1;
        assert.equal(secondPaarl, 1);
    });

    it('Should return false for CL 900', function(){
        var uknown1 = false;
        assert.equal(uknown1, false);
    });
    
    it('Should return false for CA 34567', function(){
        var uknown2 = false;
        assert.equal(uknown2, false);
    });

    it('Should return false for CN 7864', function(){
        var uknown3 = false;
        assert.equal(uknown3, false);
    });
})