describe('The isWeekday function', function(){
    it('Should check if the day is a week day', function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
    })
})