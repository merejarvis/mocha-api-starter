var assert = require('assert')
describe('Array', function (){
  it('should return -1 when val not present', function (){
    assert.equal(-1, [1,2,3].indexOf(4))
  })
  it('should return 2 looking for index of 3', function (){
    assert.equal(2, [1,2,3].indexOf(3))
  })
})
