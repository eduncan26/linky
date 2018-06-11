'use strict';
const List = require('./list');

class Queue {
  constructor() {
    this.list = new List();
  }

  enqueue(data) {
    this.list.add(data);
  }

  dequeue() {
    return this.list.shift();
  }
}

module.exports = Queue;
