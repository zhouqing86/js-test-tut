const expect = require('expect.js');

expect({ a: 'b' }).to.eql({ a: 'b' })
expect(5).to.be.a('number');
expect([]).to.be.an('array');
expect(1).to.eql('1');
expect('1.0.1').to.match(/[0-9]+\.[0-9]+\.[0-9]+/);
expect([1, 2]).to.contain(1);
expect('hello world').to.contain('world');
expect([1,2,3]).to.have.length(3);
expect([]).to.be.empty();
expect({ my: 'object' }).to.not.be.empty();
expect({a: 'b'}).to.have.property('a');
expect({ a: 'b', c: 'd' }).to.only.have.keys('a', 'c');
expect({ a: 'b', c: 'd' }).to.only.have.keys(['a', 'c']);
expect( (a,b) => a+b).to.not.throwException();
expect( (a,b) => a+b).withArgs(1,1).to.not.throwException();
