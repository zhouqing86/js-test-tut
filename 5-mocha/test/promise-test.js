import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;

const testPromise = () => Promise.resolve([1, 2, 3]);

describe('#testPromise', function() {
  it('respond with matching records', function() {
    return expect(testPromise()).to.eventually.have.length(3);
  });
});
