const expect = require('chai').expect;
const magic = require('../magic');

describe('magic', () => {
  describe('tada', () => {
    it('0', () => {
      expect(magic.tada(0)).to.be.equal(0);
    });
  });
})