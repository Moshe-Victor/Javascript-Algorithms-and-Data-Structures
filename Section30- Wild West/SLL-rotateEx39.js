//This function should rotate all the nodes in the list by some
// number passed in. For instance, if your list looks
// like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list
// should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number
// passed in to rotate can be any integer.
//
// Time Complexity: O(N), where N is the length of the list.
//
// Space Complexity: O(1)



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

    rotate(idx){

        if (idx < 0 || idx > this.length - 1) {
            return null;
        }

        let currNode = this.head;

        for (let i = 1; i < this.length; i++) {

            //let nextNode = currNode.next;

            if (i < idx && i!== currNode) {

                this.tail = currNode;
                currNode.next = this.tail ;
                currNode = currNode.next;

            }
            else if (i === idx) {
                this.head = currNode;
                currNode = currNode.next;
            }
            else if (i > idx) {
                currNode = currNode.next;
                this.head.next = currNode;
            }

            return this;
        }

    }

}

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 25;

console.log(singlyLinkedList.rotate(3));
console.log(singlyLinkedList.head.val); // 20
console.log(singlyLinkedList.head.next.val); // 25
// singlyLinkedList.head.next.next.val; // 5
// singlyLinkedList.head.next.next.next.val; // 10
// singlyLinkedList.head.next.next.next.next.val; // 15
// singlyLinkedList.tail.val; // 15
// singlyLinkedList.tail.next; // null
// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;
//
// singlyLinkedList.rotate(-1);
// singlyLinkedList.head.val; // 25
// singlyLinkedList.head.next.val; // 5
// singlyLinkedList.head.next.next.val; // 10
// singlyLinkedList.head.next.next.next.val; // 15
// singlyLinkedList.head.next.next.next.next.val; // 20
// singlyLinkedList.tail.val; // 20
// singlyLinkedList.tail.next // null
// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;
//
// singlyLinkedList.rotate(1000);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.head.next.val; // 10
// singlyLinkedList.head.next.next.val; // 15
// singlyLinkedList.head.next.next.next.val; // 20
// singlyLinkedList.head.next.next.next.next.val; // 25
// singlyLinkedList.tail.val; // 25
// singlyLinkedList.tail.next // null