// This function should find a node at a specified index in a
// SinglyLinkedList. It should return the found node.

class Node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    get(idx) {

        if (idx < 0 || idx > this.length - 1) {
            return null;
        }

        let currNode = this.head;
        let count = 0;

        while (count !== idx) {
            currNode = currNode.next;
            count++;
        }

        return currNode;

    }
}


var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.get(0).val); // 5
console.log(singlyLinkedList.get(1).val );// 10
console.log(singlyLinkedList.get(2).val); // 15
console.log(singlyLinkedList.get(3).val); // 20
console.log(singlyLinkedList.get(4)); // null
