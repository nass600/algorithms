/**
 * Linked List Node
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  first() {
    return this.head;
  }

  add(node) {
    let currentNode = this.head;

    if (currentNode === null) {
      this.head = node;
      this.length++;

      return;
    }

    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;
  }

  get(position) {
    let currentNode = this.head;
    let counter = 0;

    while(currentNode) {
      if (counter === position) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }

    throw new Error(`Item not found at index ${position}`);
  }

  delete(position) {
    let counter = 0;
    let currentNode = this.head;
    let previousNode = null;

    while(currentNode !== null) {
      if (counter === position) {

        if (previousNode === null) {
          this.head = currentNode.next;
        } else {
          previousNode.next = currentNode.next;
        }

        currentNode = null;
        this.length--;

        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    throw new Error(`Item not found at index ${position}`);
  }

  count() {
    return this.length;
  }

  print() {
    let currentNode = this.head;

    while(currentNode !== null) {
      console.log(currentNode.value);

      currentNode = currentNode.next;
    }
  }
}

export {
  Node,
  LinkedList
}
