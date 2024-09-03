class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let currentNode;
    if (this.root === null) {
      this.root = new Node(value);
      currentNode = this.root;
      return this;
    }
    while (true) {
      if (value === currentNode) return undefined;
      if (value > currentNode) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          const newNode = new Node(value);
          currentNode.right = newNode;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          const newNode = new Node(value);
          currentNode.left = newNode;
        }
      }
    }
  }

  find(value) {
    let currentNode = this.root;
    if (currentNode === null) return false;
    if (value === currentNode.value) return true;
    let found = false;
    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
        return true;
      }
    }
    return false;
  }
}

const bst = new BinarySearchTree();
bst.root = new Node(10);
bst.root.left = new Node(7);
bst.root.right = new Node(11);
bst.root.left.left = new Node(4);

console.log(bst);
