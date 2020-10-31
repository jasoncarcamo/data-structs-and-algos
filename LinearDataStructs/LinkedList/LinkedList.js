const Node = require("./Node");

// Fundamental to other data structures
// Big O (n) - Based on length of data set
class LinkedList {
    constructor(){
        this.head = null;
    }

    // adds node to head
    addToHead(data){
        const newHead = new Node(data);
        const head = this.head;

        // if head has a value
        if(head){
            // set newHead's next property to current head
            newHead.setNextNode(head);
        };

        // set head to newHead
        this.head = newHead;
    }

    // adds to tail
    addToTail(data){
        const newTail = new Node(data);
        // tail will use this head as the starter node
        let tail = this.head;

        // if there is no tail
        if(!tail){
            // this head will now equal newTail
            this.head = newTail;
        } else{
            // else
            // while tail continues to have a value for its next property
            while(tail.getNextNode()){
                // set tail to tail's next value
                tail = tail.getNextNode();
            };

            // set the next value of the last tail node
            // the value being assigned is now the last node on our LinkedList
            tail.setNextNode(newTail);
        };
    }

    // removes head
    removeHead(){
        const headToRemove = this.head;

        // if there is no head to remove
        if(!headToRemove){

            //return null
            return null;
        } else{
            // else
            // set this head to head to remove next property value
            this.head = headToRemove.getNextNode();

            //return the data of the current head we removed
            return headToRemove.data;
        }
    }

    // removes tail (last node)
    removeTail(){
        let tailToRemove = this.head;

        // if the is no tail to remove
        if(!tailToRemove){

            // return null
            return null;
        } else{
            // else
            // pointer for previous node declared with no value
            let prevNode;

            // if tail to remove does not have a next property value
            if(!tailToRemove.getNextNode()){

                // this head now equals null
                this.head = null;
            } else{
                
                // here we set previous node
                // while tail has a value for it's next property
                while(tailToRemove.getNextNode()){
                    // previous node equals tail to remove
                    prevNode = tailToRemove;
                    // tail to remove equals tail's next property 
                    tailToRemove = tailToRemove.getNextNode();
                };
            }

            // if previous node was set 
            if(prevNode){
                // previous node's next property now equals null
                prevNode.setNextNode(null);
            };

            // return tail to remove data
            return tailToRemove.data;
        }
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
          output += currentNode.data + ' ';
          currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
      }
};

module.exports = LinkedList;