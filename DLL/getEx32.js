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
}


var doublyLinkedList = new DoublyLinkedList;

doublyLinkedList.push(5).push(10).push(15).push(20);
//console.log(doublyLinkedList);
console.log(doublyLinkedList.length); // 4
console.log("///////////GET////////////");
console.log(doublyLinkedList.get(0).val); // 5
console.log(doublyLinkedList.get(1).val); // 10
console.log(doublyLinkedList.get(2).val); // 15
console.log(doublyLinkedList.get(3).val); // 20
console.log(doublyLinkedList.get(4)); // null

