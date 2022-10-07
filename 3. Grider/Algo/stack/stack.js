// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop(record) {
        return this.data.pop(record);
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;

/// QueueStacks
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }
}
