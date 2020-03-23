describe('The countRegNumber function', function(){
    it('Should split the registration numbers and return 3', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
        assert.equal(regCount, 3);
    })
})