describe('The countRegNumber function', function(){
    it('Should return 1 for CA 182736', function(){
        var CA_regNumber = 1;
        assert.equal(CA_regNumber, 1);
    });
    it('Should return 1 for CY 523519', function(){
        var CY_regNumber = 1;
        assert.equal(CY_regNumber, 1);
    })
    it('Should return 1 for CJ 812328', function(){
        var CJ_regNumber = 1;
        assert.equal(CJ_regNumber, 1);
    })
    it('Should return 3 as number of all the registration numbers', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
        assert.equal(regCount, 3);
    })
})