## Merge Two Sorted Linked Lists


### Iterative Approach

```js
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

```


### Recursive Approach

```js

```