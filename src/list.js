import Node from './node';

export default class List {
  constructor(...args) {
    this.len = 0;
    this.head = null;
    this.last = null;

    args.forEach((arg) => {
      if (Array.isArray(arg)) {
        arg.forEach(this.add.bind(this));
      } else {
        this.add(arg);
      }
    });
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
      this.len += 1;
    } else {
      const prev = this.last;
      this.last.next = node;
      this.last = node;
      this.last.previous = prev;
      this.len += 1;
    }
  }

  /**
   * Get the length of the list
   * @return {number}
   */
  length() {
    return this.len;
  }

  /**
   * Get the last value of the list
   * @return {*}
   */
  pop() {
    if (!this.last) {
      return undefined;
    }
    const { data, previous } = this.last;
    if (previous) {
      previous.next = null;
    }
    this.last = previous;
    this.len -= 1;
    return data;
  }

  /**
   * Get the first value of the list
   * @return {*}
   */
  shift() {
    const { next, data } = this.head;
    this.head = next;
    this.len -= 1;
    return data;
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
    for (const value of this) { // eslint-disable-line no-restricted-syntax
      idx += 1;
      if (idx === position) {
        return value;
      }
    }

    return false;
  }

  /**
   * Implement the iterator interface to make List iterable
   * @return {*}
   */
  [Symbol.iterator]() {
    let node = this.head;
    return {
      next() {
        if (node) {
          const { data } = node;
          node = node.next;
          return { value: data, done: false };
        }
        return { done: true };
      },
    };
  }
}
