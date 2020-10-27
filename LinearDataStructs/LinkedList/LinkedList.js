const Node = require("./Node");

// Fundamental to other data structures
class LinkedList {
    constructor(data){
        this.head = null;
    }

    addToHead(data){
        const newHead = new Node(data);
        const head = this.head;

        if(head){
            newHead.setNextNode(head);
        };

        this.head = newHead;
    }

    addToTail(data){
        const newTail = new Node(data);
        let tail = this.head;

        if(!tail){
            this.head = newTail;
        } else{

            while(tail.getNextNode()){
                tail = tail.getNextNode();
            };

            tail.setNextNode(newTail);
        }
    }

    removeHead(){
        const headToRemove = this.head;

        if(!headToRemove){
            return null;
        } else{

            this.head = headToRemove.getNextNode();

            return headToRemove.data;
        }
    }

    removeTail(){
        let tailToRemove = this.head;

        if(!tailToRemove){
            return null;
        } else{
            let prevNode;

            if(!tailToRemove.getNextNode()){
                this.head = null;
            } else{
                while(tailToRemove.getNextNode()){
                    prevNode = tailToRemove;
                    tailToRemove = tailToRemove.getNextNode();
                };
            }

            if(prevNode){
                prevNode.setNextNode(null);
            };

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