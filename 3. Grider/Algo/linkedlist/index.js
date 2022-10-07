// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let curNode = this.head;

    while (curNode) {
      counter++;
      curNode = curNode.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let curNode = this.head;
    while (curNode) {
      if (!curNode.next) return curNode;
      curNode = curNode.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let curNode = this.head.next;
    while (curNode.next) {
      prev = curNode;
      curNode = curNode.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();
    lastNode ? (lastNode.next = new Node(data)) : (this.head = new Node(data));
  }

  getAt(index) {
    let counter = 0;
    curNode = this.head;

    while (curNode) {
      if (counter === index) return curNode;
      curNode = curNode.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.removeFirst();
      return;
    }

    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) return;

    prev.next = prev.next.next;
  }

  insertAt(data, integer) {
    if (!this.head) return;

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prev = this.getAt(integer - 1) || this.getLast(); //Если индекс больше чем есть нодов, то обращаемся к последнему.

    const newNode = new Node(data, prev.next);
    prev.next = newNode;
  }

  *[Sumbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

// const list = new LinkedList();
// list.head = new Node(10);

module.exports = { Node, LinkedList };

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// Questions
// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
//
// Наша цель - вернуть средний узел связанного списка. Цель здесь в том, чтобы каким-то образом найти средний узел связанного списка, не зная его размера.

// 2 указателя, оба начинают перебор в начале списка. Один с шагом 1 узел второй шаг 2 узла. Если второй узел дошел до конца(нет двух узлов после), значит первый указатель на середине.
function midpoint(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = list.head.next;
    fast = list.head.next.next;
  }

  return slow;
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// Если дан связный список, верните true, если список круговой, и false, если нет.
// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

module.exports = circular;

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
