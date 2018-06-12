import List from './list';

export default class Queue {
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
