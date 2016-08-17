
const _message = { failure: 'Failure: non-existent node in this list.' };

export default class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  }
  
  add(value) {
    const node = new Node(value);
    let currentNode = this.head;
    
    // 1st use case: an empty list
    if (!currentNode) {
      this.head = node;
      this._length++;
      
      return node;
    }
    
    // 2nd use case: a non-empty list
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    
    currentNode.next = node;
    
    this._length++;
    
    return node;
  }
  
  searchNodeAt(position) {
    let currentNode = this.head;
    let length = this._length;
    let count = 1;
    
    // Check for invalid position
    if (length === 0 || position < 1 || position > length) {
      throw new Error(_message.failure);
    }
    
    // Find item at provided position.
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }
    
    return currentNode;
  }
  
  remove(position) {
    let currentNode = this.head;
    let length = this._length;
    let count = 0;
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;
    
    // Check for invalid position
    if (position < 0 || position > length) {
      throw new Error(_message.failure);
    }
    
    // first node is removed
    if (position === 1) {
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this._length--;
      
      return  deletedNode;
    }
    
    // Any other node is removed
    while (count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count++;
    }
    
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.length--;
    
    return deletedNode;
  }
}
