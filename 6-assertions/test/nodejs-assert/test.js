const assert = require('assert');

describe('nodejs assert module', () => {
  it('strict equal assertion will fail', () => {
    assert.strictEqual(1, '1');
  });

  it('throw error assertion will pass', () => {
    assert.throws(
      () => {
        throw new Error('Wrong value');
      },
      /value/
    );
  });
});
