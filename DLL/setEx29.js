class Node{
    constructor(val){
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
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

    set(idx, val){

        let currNode = this.get(idx);

        if (currNode){
            currNode.val = val;
            return true;
        }
        else{
            return false;
        }
    }


}


var doublyLinkedList = new DoublyLinkedList();

console.log(doublyLinkedList.push(5).push(10).push(15).push(20));
console.log(doublyLinkedList.set(0,10)); // true
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.head.val); // 10

console.log(doublyLinkedList.set(10,10)); // false

console.log(doublyLinkedList.set(2,100)); // true
console.log(doublyLinkedList.head.next.next.val); // 100





