# Find Loop in a Linked List

We will be using same Linked list we implemented in the data structures section

### Solution 1

We can use a hashing to check the already visited nodes. If node already exist in the hashSet, means there is a loop in the linked list

    create a new HashSet
    current node = head
    while node
        if hash set exit the current node
            return true
        
        add current node to hashSet
        assign the next value to the current

    return false at the end


```js
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


function hasLoop(l) {
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


console.log(hasLoop(l));
```

**Time Complexity** : O(n), need to traverse all the elements one time
**Space Complexity**: O(n), since we are creating a set to store nodes




### Solution 2

**Floyd’s Cycle-Finding Algorithm**

* use two pointers to find the loop
* Move first pinter one by one and second pointer by two
* if the pointers meet at the same node, there is a loop

See the below example to get a better idea

1 -> 2 -> 3 -> 4 -> 1

in the first step
pointer1 = 1;
pointer2 = 2;
and check the pointers are equal or not, if not continue

in the second step
pointer1 = 2;
pointer2 = 4;
and check the pointers are equal or not, if not continue

in the third step
pointer1 = 3;
pointer2 = 2;
and check the pointers are equal or not, if not continue

in the forth step
pointer1 = 4;
pointer2 = 4;
and check the pointers are equal or not, if not continue

pointers are equal, means there is a loop

    create two pointers as pointer1, pointer2 and assigned head as initial value
    while pointer1,pointer2 and pointer2.next not equal to null
        pointer1 equal to pointer.next node
        pointer2 equals pointer.next.next
        if pointer1 and pointer2 equal
            return true
    return false if pointer become null

code

```js
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


function hasLoop(l) {
    let p1 = l.head;
    if (!p1) {
        return false;
    }
    let p2 = l.head.next;

    while (p1 && p2 && p2.next) {
        if (p1 == p2) {
            return true;
        }
        p1 = p1.next;
        p2 = p2.next.next;
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


console.log(hasLoop(l));
```