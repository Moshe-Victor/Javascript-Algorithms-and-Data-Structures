# Doubly Linked List

Objectives
- Construct
- Compare with singly
- Implement basic operations

- Almost identical to singly, except every node has another pointer to the previous node!


```javascript
function test() {
    
}
```

```javascript

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }
    
    
    /*
    * Create a new node with the value passed to the function
    * check if the head property is null, set the head and tail to be the newly created node.
    * if not, set the next property on the ttail to be that node
    * Set the previous property on the newly created noe to be the tail.
    * set the tail to be the newly created node.
    * increment the lenght
    * return the doubly linked list.
    * 
    * */
    push(val) {
        const newNode = new Node(val);
        if (this.length===0) {
            this.head= newNode;
            this.tail= newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    /*
    * Removing a node from the end of the Doubly Linked List
    * 
    * If there is no head, return undefined
    * store the current tail in a variable to return later
    * if the length is 1,set the head and teail to be null
    * update the tail to be the previous Node
    * Set the newTail's next to null
    * Decrement the length
    * Return the value removed
    * 
    * 
    * 
    * 
    * */
    pop() {
        if (!this.head) return undefined;
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    
    /*
    * Removes the node from the beginning of the list
    * 
    * if lenght is 0, return undefined
    * store the current head property in a variable (we will call it old head)
    * if the lenght is one
    *   set the head to be null
    *   set the tail to be null
    * update the head to be the next of the old head
    * set the head's prev prop to null
    * set the old head next to null
    * decreement lenght
    * return old head
    * */
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        
        const oldHead = this.head;
        
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;    
        }
        this.length--;
        return oldHead;
    }
    
    /*
    * unshift will add a node at the beginning 
    * 
    * Create a new node with the value passed
    * if the lenght is 0
    *   set head to the new node
    *   set the teail to be the new node
    * 
    * Otherwise
    *   set the prev property on the head of the list to be the new node
    *   set the next property on the new node to be the head property
    *   update the head to be the new node
    * 
    * increment the length
    * return the list
    * */
    unshift(val) {
        const newNode= new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.teail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    
    /*
    * Get, accessing a node in a doubly linked list
    * 
    * if index is less than 0 or greater or equal to the lenght return null
    * if the index is less than or equal to half the lenght of the list
    *   loop through the list starting from the head and loop towards the middle
    *   return the node once it is found
    * 
    * if the inex is greater than half the lenght of the list
    *   loop throug hthe list starting from the tail and loop towards the middle
    *   return the node once it is found 
    * */
    
    get(index) {
        if (index < 0 || index >= this.length) return null;
    
        if (index <= this.lenght / 2) {
            console.log('working from strart')
            const count = 0;
            const current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
            return current;    
        } else {
            console.log('working from end')
            const count = this.length - 1;
            const current = thjis.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
            
        }
        return current;
    }
    
    /*
    * replacing the value of a node to the in a Doubly Linked list
    * 
    * create a variable which is the result of the get method at the index passed to the function
    *   if the get method returns a valid node, set the value of tha tnode to be the value passed to the function
    *   return true
    * otherwise return false.
    * */
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
    /*
    * Insert, adding a node 
    * check if valid index, if negative or equal to lenght
    * if index is 0 unshift
    * if the index is same as lenght push
    * 
    * use get method to access the index - 1 
    * set the next and prev props on the correct nodes to link 
    * increment lenght 
    * return true
    * */
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        
        if (index === 0) return this.unshift(val);
        
        if (index === this.length) return this.push(val);
        
        const newNode  = new Node(val);
        const beforeNode = this.get(index-1);
        const afterNode = beforeNode.next;
        
        beforeNode.next = newNode , newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    
    /*
    * Remove
    * index less than 0 or great than or equal to length return undefined
    * if index is 0 shift
    * if index same as lenghth -1 pop
    * use the get metehod to retreive theimte to be removed
    * update the next and prev props to remove the found node from the list.
    * set prev and next to null on the found element
    * */
    remove (index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const removedNode = this.get(index);
        
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}


// Running the code
list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push('LAST ITEM')



```

[Check this function in JavaScript file](https://github.com/user/repo/blob/branchname/filename.js#L10)