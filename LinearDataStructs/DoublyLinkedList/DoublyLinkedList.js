const Node = require("./Node");


// Big O (n) -  based on length of data set
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // adds data to head
    addToHead(data){
        const newHead = new Node(data);
        const head = this.head;

        // if there is a head
        if(head){
            // set the head's previous property to newHead
            head.setPreviousNode(newHead);

            //set newHeads next property to head
            newHead.setNextNode(head);
        };

        // this head now equals newHead
        this.head = newHead;

        // if there is no tail
        if(!this.tail){
            // this tail now equals this head
            this.tail = this.head;
        };
    }

    // adds data to data set
    addToTail(data){
        const newTail = new Node(data);
        const tail = this.tail;

        // if there is a tail
        if(tail){
            // set tails next property yo newTail
            tail.setNextNode(newTail);

            // set newTail's previous property to tail
            newTail.setPreviousNode(tail);
        };

        // this tail now equals newTail
        this.tail = newTail;

        // if there is no head
        if(!this.head){

            // this head now equals this tail
            this.head = this.tail;
        };
    }

    // removes head
    removeHead(){
        const headToRemove = this.head;

        // if there is no head to remove
        if(!headToRemove){
            // return null
            return null;
        };

        // remove head by assigning head it's next property value
        this.head = headToRemove.getNextNode();

        // if there is still a head
        if(this.head){
            // set this head's previous property to null
            this.head.setPreviousNode(null);
        };

        // if the head to remove equals this tail
        if(headToRemove === this.tail){

            // remove tail
            this.removeTail();
        };

        // return the data of the head we just removed
        return headToRemove.data;
    }

    // removes tail
    removeTail(){
        const tailToRemove =this.tail;

        // if there is no tail to remove
        if(!tailToRemove){
            // return null
            return null;
        };

        // this tail now equals this tails' next property value
        this.tail = tailToRemove.getPreviousNode();

        // if there is still a tail
        if(this.tail){
            // set this tail to next property
            this.tail.setNextNode(null);
        };

        // if tail to remove equals this head
        if(tailToRemove === this.head){
            // remove head
            this.removeHead();
        };

        // return data of tail removed
        return tailToRemove.data;
    }

    // removes a node from linkedList by data
    removeByData(data){
        let currentNode = this.head;
        let nodeToRemove;

        // while current node has a next value
        while(currentNode.getNextNode()){
            // if current node's data equals data passed
            if(currentNode.data === data){
                // set node to remove to current node
                nodeToRemove = currentNode;
                // stop loop
                break;
            };
            // set current node to current node's next value
            currentNode = currentNode.getNextNode();
        };

        // if there is no node to remove
        if(!nodeToRemove){
            // return null
            return null;
        } else if(nodeToRemove === this.head){
            // else if node to remove equals this head
            // remove head
            this.removeHead();
        } else if(nodeToRemove === this.tail){
            // else if node to remove equals tail
            // remove tail
            this.removeTail();
        } else{
            const nextNode = nodeToRemove.getNextNode();
            const prevNode = nodeToRemove.getPreviousNode();
            
            // set next node's previous node to prev node
            nextNode.setPreviousNode(prevNode);
            // set prev node's next node to next node
            prevNode.setNextNode(nextNode);
        };

        // return node to remove
        return nodeToRemove;
    }

    // console logs each node's data in linked list
    printList() {
        let currentNode = this.head;
        let output = '<head> ';

        while (currentNode !== null) {

          output += currentNode.data + ' ';
          currentNode = currentNode.getNextNode();

        };
        
        output += '<tail>';
        console.log(output);
      }
};

module.exports = DoublyLinkedList;