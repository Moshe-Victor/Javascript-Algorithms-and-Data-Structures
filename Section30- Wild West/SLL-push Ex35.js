//This function should take in a value and add a node to the end of the
// SinglyLinkedList. It should return the SinglyLinkedList.

class Node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        // this.val = val
        // this.next = null;
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //let currTail = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var singlyLinkedList = new SinglyLinkedList();

console.log(singlyLinkedList.push(5)); // singlyLinkedList
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 5

console.log(singlyLinkedList.push(10)); // singlyLinkedList
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.tail.val); // 10

console.log(singlyLinkedList.push(15)); // singlyLinkedList
console.log(singlyLinkedList.length); // 3
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 15
console.log(singlyLinkedList.tail.val); // 15