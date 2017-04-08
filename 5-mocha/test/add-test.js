var expect = require('chai').expect;

function add(array) {
  return array.reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('#add', () => {
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [1, 2, 3],    expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args, function() {
      var res = add(test.args);
      expect(res).to.equal(test.expected);
    });
  });
});
