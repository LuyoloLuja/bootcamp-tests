describe('The transportFee function', function(){
    it('Should check transportFee for morning shift', function(){
        var morning = transportFee("R20");
        assert.equal(morning)
    })
    it('Should check transportFee for afternoon aftenoon', function(){
        var afternoon = transportFee("R10");
        assert.equal(afternoon);
    })
    it('Should check  transportFee for nightshift', function(){
        var nightshift = transportFee("free");
        assert.equal(nightshift);
    })
})