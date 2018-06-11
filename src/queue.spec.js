const { expect } = require('chai');
const Queue = require('./queue');

describe('Queue', () => {
  describe('#enqueue', () => {
    it('should add data to the end of the queue', () => {
      const q = new Queue();
      q.enqueue('foo');
      q.enqueue('bar');
      expect(q.list.findNodeAt(q.list.length())).to.equal('bar');
    });
  });

  describe('#dequeue', () => {
    it('should remove data from the front of the queue', () => {
      const q = new Queue();
      q.enqueue('foo');
      q.enqueue('bar');
      expect(q.dequeue()).to.equal('foo');
    });
  })
});
