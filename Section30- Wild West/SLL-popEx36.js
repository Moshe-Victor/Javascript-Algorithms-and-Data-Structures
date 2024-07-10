// This function should remove a node at the end of the SinglyLinkedList.
// It should return the node removed.

class Node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
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

    pop(){

        if(!this.head){return undefined;}

        let poppedTail = this.tail;
        let currentNode = this.head;
        let prevNode = currentNode;

        while (currentNode.next){
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        prevNode.next = null;
        this.tail = prevNode;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return poppedTail;
    }
}

var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5); // singlyLinkedList
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

console.log(singlyLinkedList.pop().val); // 15
console.log(singlyLinkedList.tail.val); // 10
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.pop().val); // 10
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.pop().val); // 5
console.log(singlyLinkedList.length); // 0
console.log(singlyLinkedList.pop()); // undefined
console.log(singlyLinkedList.length); // 0


