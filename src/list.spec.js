const { expect } = require('chai');
const List = require('./list');

let l = null;
describe('List', () => {
  beforeEach(() => {
    l = new List();
    l.add('foo');
    l.add('bar');
  });


  describe('@@iterator', () => {
    it('should respond to for ... of', () => {
      try {
        for (let value of l) {
          expect(value).to.not.be.undefined;
        }
      } catch (error) {
        expect(error).to.be.undefined;
      }
    });

    it('should iterate over all children', () => {
      const len = l.length();
      let idx = 0;
      for (let value of l) {
        idx++;
      }
      expect(idx).to.equal(len);
    });
  });

  describe('#constructor', () => {
    it('should initialize an array into a list', () => {
      const list = new List(['foo', 'bar']);
      expect(list.length()).to.equal(2);
    });

    it('should initialize values into a list', () => {
      const list = new List('foo', 'bar');
      expect(list.length()).to.equal(2);
    });

    it('should initialize a value into a list', () => {
      const list = new List('foo');
      expect(list.length()).to.equal(1);
    });
  });

  describe('#add', () => {
    it('should add the value to the tail of the list', () =>
      expect(l.pop()).to.equal('bar'));
  });

  describe('#length', () => {
    it('should return the length of the list', () =>
      expect(l.length()).to.equal(2));
  });

  describe('#pop', () => {
    let item = null;
    beforeEach(() => item = l.pop());
    it('should return the last item of the list', () =>
      expect(item).to.equal('bar'));
    it('should reduce the length', () =>
      expect(l.length()).to.equal(1));
    it('should return undefined if the list is empty', () =>
      expect((new List()).pop()).to.be.undefined);
  });

  describe('#shift', () => {
    let item = null;
    beforeEach(() => item = l.shift());
    it('should return the first item of the list', () =>
      expect(item).to.equal('foo'));
    it('should reduce the length', () =>
      expect(l.length()).to.equal(1));
  });
});
