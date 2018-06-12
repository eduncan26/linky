import { expect } from 'chai';
import { List } from '.';

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
        for (const value of l) { // eslint-disable-line no-restricted-syntax
          expect(value).to.not.be.undefined; // eslint-disable-line no-unused-expressions
        }
      } catch (error) {
        expect(error).to.be.undefined; // eslint-disable-line no-unused-expressions
      }
    });

    it('should iterate over all children', () => {
      const len = l.length();
      let idx = 0;
      for (const _ of l) { // eslint-disable-line no-restricted-syntax,no-unused-vars
        idx += 1;
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
    beforeEach(() => { item = l.pop(); });
    it('should return the last item of the list', () =>
      expect(item).to.equal('bar'));
    it('should reduce the length', () =>
      expect(l.length()).to.equal(1));
    it('should return undefined if the list is empty', () =>
      expect((new List()).pop()).to.be.undefined);
  });

  describe('#shift', () => {
    let item = null;
    beforeEach(() => { item = l.shift(); });
    it('should return the first item of the list', () =>
      expect(item).to.equal('foo'));
    it('should reduce the length', () =>
      expect(l.length()).to.equal(1));
  });

  describe('#findNodeAt', () => {
    it('should find a node at the head', () => {
      expect(l.findNodeAt(0)).to.equal('foo');
    });

    it('should find a node at the end', () => {
      expect(l.findNodeAt(l.length())).to.equal('bar');
    });

    it('should find a node in the middle', () => {
      l.add('baz');
      expect(l.findNodeAt(Math.ceil(l.length() / 2))).to.equal('bar');
    });

    it('should return false if an index cannot be found', () =>
      expect(l.findNodeAt(-1)).to.be.false);
  });
});
