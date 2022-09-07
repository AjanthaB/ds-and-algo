
class SinglyLinkedListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        const n = new SinglyLinkedListNode(val);
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
            if (current.val == element) {
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
            str = str + current.val + " -> ";
            current = current.next;
        } 
        return str;
    }
}



const list1  = new SinglyLinkedList();

list1.add(1);
list1.add(2);
list1.add(5);
list1.add(6);


const list2  = new SinglyLinkedList();

list2.add(1);
list2.add(3);
list2.add(4);
list2.add(7);


function merge(list1, list2) {
    if (!list1 || !list2) {
        return list1 || list2;
    }

    let currentNode = new SinglyLinkedListNode(0);
    const mergedHead = currentNode;

    while(list1 && list2) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }

        currentNode = currentNode.next;
    }

    if (list1) {
        currentNode.next = list1;
    }

    if (list2) {
        currentNode.next = list2;
    }

    return mergedHead.next;
}


const mergedHead = merge(list1.head, list2.head);

console.log(mergedHead);