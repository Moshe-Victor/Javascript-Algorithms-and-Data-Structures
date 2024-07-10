//This function should accept an index and a value and update the
//value of the node in the SinglyLinkedList at the index with the
// new value. It should return true if the node is updated successfully,
// or false if an invalid index is passed in.



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

    set(idx, val){

        let currNode = this.get(idx);
        if (currNode) {
            currNode.val = val;
            return true;
        }
    }
}

var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.set(0,10)); // true
console.log(singlyLinkedList.set(1,2)); // true
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.head.val); // 10
console.log(singlyLinkedList.set(10,10)); // false
console.log(singlyLinkedList.set(3,100)); // true
console.log(singlyLinkedList.head.next.next.next.val); // 10

