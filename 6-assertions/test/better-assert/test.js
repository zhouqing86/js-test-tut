const assert = require('better-assert');

describe('better-assert', () => {
  it('will assert fail on the strict equal expression', () => {
    assert(1 === '1');
  });
});
