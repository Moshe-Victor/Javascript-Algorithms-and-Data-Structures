// This should insert a node at a specified index in a
// SinglyLinkedList. It should return true if the index is valid,
// and false if the index is invalid (less than 0 or greater than
// the length of the list).

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

    unshift(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;

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

    insert(idx, val){

        if (idx < 0 || idx > this.length - 1) {
            return false;
        }

        if (idx === 0){
            return !!this.unshift(val);
        }

        else if (idx === this.length) {
            return !!this.push(val);
        }
        else {
            let newNode = new Node(val);
            let prevNode = this.get(idx - 1);

            let nextNode = prevNode.next;

            prevNode.next = newNode;
            newNode.next = nextNode;
            this.length++;
            return true;
        }

    }
}

var singlyLinkedList = new SinglyLinkedList;
console.log(singlyLinkedList.push(5).push(10).push(15).push(20));
console.log(singlyLinkedList.insert(2,12)); // true
console.log(singlyLinkedList.insert(100,12)); // false
console.log(singlyLinkedList.length); // 5
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 12
console.log(singlyLinkedList.head.next.next.next.val); // 15
console.log(singlyLinkedList.head.next.next.next.next.val); // 20