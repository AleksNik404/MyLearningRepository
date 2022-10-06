// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Queue;

// function weave(sourceOne, sourceTwo) {
//     const q = new Queue();

//     while (sourceOne.peek() || sourceTwo.peek()) {
//         if (sourceOne.peek()) {
//             q.add(sourceOne.remove());
//         }
//         if (sourceTwo.peek()) {
//             q.add(sourceTwo.remove());
//         }
//     }

//     return q;
// }
