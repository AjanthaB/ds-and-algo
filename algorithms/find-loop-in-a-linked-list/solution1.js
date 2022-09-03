class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const n = new SinglyLinkedListNode(data);
        if (this.head == null) {
            this.head = n;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = n;
        }
        this.size = this.size + 1;
    }
}


function findLoop(l) {
    const s  = new Set();
    let current = l.head;

    while (current) {
        if (s.has(current)) {
            return true;
        }
        s.add(current);
        current = current.next;
    }

    return false;
}


const l = new SinglyLinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);

// create a loop in linked list
const head = l.head;
l.head.next.next.next.next = head;


console.log(findLoop(l));