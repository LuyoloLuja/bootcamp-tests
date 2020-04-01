describe('The findItemsOver20 function', function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    it('Should return true for pears', function(){
        assert.equal(name.pears);
    })

    it('Should return true for bananas', function(){
        assert.equal(name.bananas);
    })
    it('Should return false for apples', function(){
        assert.equal(name.apples, undefined);
    })
})