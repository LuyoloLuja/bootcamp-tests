describe('The findItemsOver function', function(){
    var result = [
        {name:'apples', qty:40},
        {name:'pears', qty:20},
        {name:'bananas', qty:23},
        {name:'apples', qty:37},
    ];

    it('Should return true for apples', function(){
        assert.equal(name.apples);
    })
    it('Should return false for pears', function(){
        assert.equal(name.pears, undefined);
    })
    it('Should return false for bananas', function(){
        assert.equal(name.bananas, undefined);
    })
})