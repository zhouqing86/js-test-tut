const chai = require('chai');

chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe('chai', function() {
  it('test with should', function() {
    (1).should.be.exactly(1);
  });

  it('test with expect', function() {
    expect(1+1).to.equal(2);
  });

  it('test with assert', function() {
    assert.equal(1+1, 2);
  });
});
