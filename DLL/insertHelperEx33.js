// insert
// This internal/helper function should insert a node at a specified index
// in a DoublyLinkedList. It should return true if the index is valid, and
// false if the index is invalid (less than 0 or greater than the length of
// the list).

// remove
// This function should remove a node at a specified index in a
// DoublyLinkedList. It should return the removed node. if the
// index is valid, or undefined if the index is invalid.




class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
        }
        return this;
    }

    unshift(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            //let currTail = this.tail;
            this.head.prev = newNode;
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

        let mid = Math.floor(this.length / 2);
        let currNode;

        if (idx < mid) {

            for (let i = 0; i < mid; i++) {

                if (i === 0) {
                    currNode = this.head
                } else {
                    currNode = currNode.next;
                }

                if (idx === i) {
                    return currNode;
                }
            }
        }

        else{

            for (let i = this.length-1; i => mid; i--) {

                if (i === this.length-1) {
                    currNode = this.tail;
                } else {
                    {
                        currNode = currNode.prev;
                    }
                }

                if (idx === i) {
                    return currNode;
                }
            }
        }
    }

    insert(idx, val){

        if (idx < 0 || idx > this.length - 1) {
            return false;
        }

        if (idx === 0){
            return !!this.unshift(val);
        }

        if (idx === this.length) {
            return !!this.push(val);
        }

        let newNode = new Node(val);
        let prevNode = this.get(idx-1);

        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;
        return true;
    }


    remove(){

    }
}



var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.insert(2,12)); // true
console.log(doublyLinkedList.insert(100,12)); // false
console.log(doublyLinkedList.length); // 5
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.head.next.val); // 10
console.log(doublyLinkedList.head.next.next.val); // 12
console.log(doublyLinkedList.head.next.next.next.val); // 15
console.log(doublyLinkedList.head.next.next.next.next.val); // 20
//
// var doublyLinkedList = new DoublyLinkedList;
// doublyLinkedList.push(5).push(10).push(15).push(20);
// doublyLinkedList.remove(2).val; // 15
// doublyLinkedList.remove(100); // undefined
// doublyLinkedList.length // 3
// doublyLinkedList.head.val // 5
// doublyLinkedList.head.next.val // 10
// doublyLinkedList.head.next.next.val // 20
//




