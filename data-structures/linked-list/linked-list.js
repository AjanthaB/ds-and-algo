
// ====================================
//
// Singly Linked List Implementation
//
// ====================================

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

    getAt(index) {
        let current = this.head;
        let count = 1;
        while (current) {
            if (index == count) {
                break;
            }
            current = current.next;
            count++;
        }

        return current;
    }

    indexOf(element) {
        let current = this.head;
        let count = 1;
        while (current) {
            if (current.data == element) {
                break;
            }
            current = current.next;
            count++;
        }

        return count;
    }

    removeAt(index) {
        let current = this.head;
        let previous = null;
        let count = 1;
        while (current) {
            if (index == count) {
                if (previous == null) {
                    this.head = null;
                } else {
                    previous.next = current.next;
                }
                break;
            }
            previous = current;
            current = current.next;
            count++;
        }
    }

    printAll() {
        let current = this.head;
        let str = "";
        while (current) {
            str = str + current.data + " -> ";
            current = current.next;
        } 
        return str;
    }
}

const l  = new SinglyLinkedList();

l.add(10);
l.add(20);
l.add(30);
l.add(40);
l.add(50);

// console.log(l.size);
// console.log(l.printAll());
// console.log(l.getAt(3).data);
// console.log(l.removeAt(3))
// console.log(l.printAll());
// console.log(l.indexOf(20));




// ====================================
//
// Doubly Linked List Implementation
//
// ====================================

class DoublyLinkedListNode {
    constructor(data, previous) {
        this.data = data;
        this.next = null;
        this.previous = previous;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        if (this.head == null) {
            this.head = new DoublyLinkedListNode(data, null);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next =  new DoublyLinkedListNode(data, current);
        }
        this.size = this.size + 1;
    }

    removeAt(index) {
        if (index == 1) {
            this.head = null;
            return;
        }

        let current = this.head;
        let count = 1;
        while (current) {
            if (index == count) {
                current.previous.next = current.next;
                current.next.previous = current.previous;
                break;
            }
            current = current.next;
            count++;
        }
    }

    printAll() {
        let current = this.head;
        let str = "";
        while (current) {
            str = str + current.data + " -> ";
            current = current.next;
        } 
        return str;
    }

    //  reset of the methods are same as singly linked list
}


const dl = new DoublyLinkedList();
dl.add(10);
dl.add(20);
dl.add(30);
dl.add(40);
dl.add(50);
console.log(dl.printAll())
console.log(dl.removeAt(4));
console.log(dl.printAll())
