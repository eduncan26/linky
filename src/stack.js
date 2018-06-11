'use strict';
const List = require('./list');

class Stack {
  constructor() {
    this.list = new List();
  }

  isEmpty() {
    return this.list.length() === 0;
  }

  peek() {
    return this.list.findNodeAt(this.list.length());
  }

  push(data) {
    this.list.add(data);
  }

  pop() {
    return this.list.pop();
  }
}

module.exports = Stack;
