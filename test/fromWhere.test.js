describe('The fromWhere function', function(){
    it('Should check where the registration numbers are from', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, 3)
    })
})