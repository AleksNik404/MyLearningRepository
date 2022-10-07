// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
///////////BINARY SEARCH TREE////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) this.left.insert(data);
    if (data < this.data && !this.left) this.left = new Node(data);

    if (data > this.data && this.right) this.right.insert(data);
    if (data > this.data && !this.right) this.right = new Node(data);
  }

  contains(data) {
    if (data === this.data) return this;
    if (data < this.data && this.left) return this.left.contains(data);
    if (data > this.data && this.right) return this.right.contains(data);

    return null;
  }
}

module.exports = Node;

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
///////////BINARY SEARCH TREE////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
}

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) return false;
  if (min !== null && node.data < min) return false;

  if (node.left && !validate(node.left, min, node.data)) return false;
  if (node.right && !validate(node.right, node.data, max)) return false;

  return true;
}

module.exports = validate;
