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
        } else {

            for (let i = this.length - 1; i => mid; i--) {

                if (i === this.length - 1) {
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

    shift() {

        if (!this.head) {
            return undefined;
        }
        let poppedHead = this.head;

        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = poppedHead.next;
            this.head.prev = null;
            poppedHead.next = null;

        }
        this.length--;
        return poppedHead;
    }

    pop() {

        if (!this.head) {
            return undefined;
        }
        let poppedTail = this.tail;

        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = poppedTail.prev;
            this.tail.next = null;
            poppedTail.prev = null;

        }
        this.length--;
        return poppedTail;

    }

    remove(idx) {

        let nodeToRem = this.get(idx);

        if (nodeToRem) {

            if (nodeToRem === this.head) this.shift()

            else if (nodeToRem === this.tail) this.pop()

            else {

                let nextNode = nodeToRem.next;
                let prevNode = nodeToRem.prev;

                prevNode.next = nextNode;
                nextNode.prev = prevNode;

                this.length--;

            }

            return nodeToRem;

        } else {
            return undefined;
        }
    }

}


var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.push(5).push(10).push(15).push(20));
console.log(doublyLinkedList.remove(2).val); // 15
console.log(doublyLinkedList.remove(100)); // undefined
console.log(doublyLinkedList.length) // 3
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.head.next.val); // 10
console.log(doublyLinkedList.head.next.next.val); // 20