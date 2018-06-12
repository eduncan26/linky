import { expect } from 'chai';
import { Stack } from '.';

describe('Stack', () => {
  describe('#isEmpty', () => {
    it('should be true if there is nothing on the stack', () =>
      expect((new Stack()).isEmpty()).to.be.true);
    it('should be false if there is something on the stack', () => {
      const stack = new Stack();
      stack.push('foo');
      expect(stack.isEmpty()).to.be.false; // eslint-disable-line no-unused-expressions
    });
  });

  describe('#peek', () => {
    it('should show the value of the top of the stack', () => {
      const stack = new Stack();
      stack.push('foo');
      stack.push('bar');
      expect(stack.peek()).to.equal('bar');
    });

    it('should not remove the item from the stack', () => {
      const stack = new Stack();
      stack.push('foo');
      stack.peek();
      expect(stack.isEmpty()).to.be.false; // eslint-disable-line no-unused-expressions
    });
  });

  describe('#push', () => {
    it('should add data to the top of the stack', () => {
      const stack = new Stack();
      stack.push('foo');
      stack.push('bar');
      stack.push('baz');
      expect(stack.pop()).to.equal('baz');
      expect(stack.pop()).to.equal('bar');
      expect(stack.pop()).to.equal('foo');
    });
  });

  describe('#pop', () => {
    it('should remove the most recently added element from the stack', () => {
      const stack = new Stack();
      stack.push('foo');
      stack.push('bar');
      expect(stack.pop()).to.equal('bar');
    });

    it('should return undefined when there is nothing to remove from the stack', () =>
      expect((new Stack()).pop()).to.be.undefined);
  });
});
