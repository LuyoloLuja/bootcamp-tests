describe('The totalPhoneBill function', function(){
    it('Should count cost of calls', function(){
        var calls = totalPhoneBill("R2.75", calls);
        assert.equal(calls, 2);
    })
    it('Should count total cost of sms', function(){
        var sms = totalPhoneBill("R0.65", 3);
        assert.equal(sms)
    })
    it('Should return added cost', function(){
        var cost = totalPhoneBill(calls, sms);
        assert.equal(calls, sms)
    })
})