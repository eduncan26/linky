'use strict';
const Node = require('./node');

class List {
  constructor() {
    this._length = 0;
    this.head = null;
    this.last = null;

    if (arguments.length) {
      for (let i = 0; i < arguments.length; i++) {
        const arg = arguments[i];
        if (Array.isArray(arg)) {
          arg.forEach(this.add.bind(this));
        } else {
          this.add(arg);
        }
      }
    }
  }

  /**
   * @param i {*} Data to add to the List
   * @return {void}
   */
  add(i) {
    const node = new Node(i);
    if (!this.head) {
      this.head = node;
      this.last = node;
      this._length++;
    } else {
      const prev = this.last;
      this.last.next = node;
      this.last = node;
      this.last.previous = prev;
      this._length++
    }
  }

  /**
   * Get the length of the list
   * @return {number}
   */
  length() {
    return this._length;
  }

  /**
   * Get the last value of the list
   * @return {*}
   */
  pop() {
    if (!this.last) {
      return undefined;
    }
    const data = this.last.data;
    const prev = this.last.previous;
    if (prev) {
      prev.next = null;
    }
    this.last = prev;
    this._length--;
    return data;
  }

  /**
   * Get the first value of the list
   * @return {*}
   */
  shift() {
    const head = this.head;
    this.head = head.next;
    this._length--;
    return head.data;
  }

  /**
   * Return the value of a node at a given position
   * @param position
   * @return {*}
   */
  findNodeAt(position) {
    if (position === 0) {
      return this.head.data;
    }

    if (position === this.length()) {
      return this.last.data;
    }

    let idx = 0;
    for (let value of this) {
      idx++;
      if (idx === position) {
        return value;
      }
    }
  }
}

/**
 * Implement the iterator interface to make List iterable
 * @yields {*}
 */
List.prototype[Symbol.iterator] = function* () {
  let node = this.head;
  for (let i = 0; i < this.length(); i++) {
    yield node.data;
    node = node.next;
  }
  return;
};

module.exports = List;
