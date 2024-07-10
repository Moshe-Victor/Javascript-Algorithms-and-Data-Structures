class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    reverse(){
        //this.length = 0;
        let currHead = this.head;
        let currTail = this.tail;

        this.head = currTail;
        //this.head.prev = null;
        this.tail = currHead;
        //this.tail.next = null;

        //doublyLinkedList.push(5).push(10).push(15).push(20)

        helper(this.head, currTail);

        function helper(firstNd, nextNd){

            //if (nodeToRev === currHead) return;
            //newList.tail  = nodeToRev;

            firstNd.next  = nextNd.prev;

            if (nextNd.prev.val === currHead.val) return;

            helper(firstNd.next, nextNd.prev);

        }

        return this;

    }

}


let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)
console.log(doublyLinkedList.reverse()); // singlyLinkedList;
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.head.val); // 20
console.log(doublyLinkedList.head.next.val); // 15
console.log(doublyLinkedList.head.next.next.val); // 10
console.log(doublyLinkedList.head.next.next.next.val); // 5
