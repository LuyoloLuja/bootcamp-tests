describe('The isFromBelville function', function(){
    it('Should return true for CY 123', function(){
        assert.equal(true, isFromBelville("CY"));
    });
    it('Should return false for CY 123', function(){
        assert.equal(false, isFromBelville("CJ"))
    })
});