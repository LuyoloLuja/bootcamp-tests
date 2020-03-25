describe('The totalPhoneBill function', function(){
    it('Should count total cost of calls', function(){
        var calls = totalPhoneBill("R2.75", 2);
        assert.equal(undefined);
    })
    it('Should count total cost of sms', function(){
        var sms = totalPhoneBill("R0.65", 3);
        assert.equal(undefined)
    })
//    it('Should return added cost', function(){
//      var cost = totalPhoneBill(calls, sms);
//        assert.equal(calls, sms)
//   })
})