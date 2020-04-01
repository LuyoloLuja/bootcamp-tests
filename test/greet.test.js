describe('The greet.js function', function(){
    it('should greet Anathi correctly', function(){
        assert.equal('Hello, Anathi', greet('Anathi'));
    });
    it('should greet Khanyiso correctly', function(){
        assert.equal('Hello, Khanyiso', greet('Khanyiso'));
    })
});