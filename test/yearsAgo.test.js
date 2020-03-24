describe('The yearsAgo function', function(){
    it('Should count number of years', function(){
        var years = yearsAgo("1976")
        assert.equal(years, 44);
    })
})