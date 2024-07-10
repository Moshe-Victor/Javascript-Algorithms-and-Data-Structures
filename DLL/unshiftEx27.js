class Node{
    constructor(val){
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        // this.val = val
        // this.next = null;
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

    pop(){

        if(!this.head){return undefined;}
        let poppedTail = this.tail;

        if (this.length === 1){
            this.tail = null;
            this.head = null;
        }
        else {
            this.tail = poppedTail.prev;
            this.tail.next = null;
            poppedTail.prev = null;

        }
        this.length--;
        return poppedTail;

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

}

console.log("/////////////UNSHIFT//////////////////////////")


var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.unshift(5)); // doublyLinkedList
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(10)); doublyLinkedList
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 10
console.log(doublyLinkedList.head.next.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(15)); doublyLinkedList
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 15
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.next.next.val); // 5


