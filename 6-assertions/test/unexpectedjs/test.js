const expect = require('unexpected');

describe('unexpected', function() {
  it('test', function() {
    expect({ text: 'f00!' }, 'to equal', { text: 'f00!' });
    expect((a,b) => a+b, 'to be a', 'function');
    expect(1+1, 'to be', 2);
  });
});
