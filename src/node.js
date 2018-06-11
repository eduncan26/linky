class Node {
  /**
   * @constructor
   * @param data {*}
   */
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

module.exports = Node;
