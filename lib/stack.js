import LinkedList from './linkedList';

export default class Stack {
  constructor() {
    this._linkedList = new LinkedList();
  }

  isEmpty() {
    return this._linkedList._length === 0;
  }

  peek() {
    return this._linkedList.searchNodeAt(1);
  }

  pop() {
    return this._linkedList.remove(1);
  }

  push(data) {
    this._linkedList.add(data);
  }
}
