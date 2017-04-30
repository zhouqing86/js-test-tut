const should = require('should');
const Assertion = should.Assertion;

// (1).should.be.exactly('1');
// false.should.not.be.ok();
// "abc".should.be.eql('abc');
// should(true).not.be.ok();
// ({ name : 'paul' }).should.have.property('name').which.is.a.String()
// (new Promise(function(resolve, reject) { resolve(10); })).should.be.a.Promise()

describe('should', function() {
  it('test customize test', function() {
     (1+1).should.be.equal(2);
  });
});
