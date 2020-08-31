const Node = require("./Node");

// Fundamental to other data structures
class LinkedList {
    constructor(data){
        this.head = null;
    }

    addToHead(data){
        const newHead = new Node(data);
        let currentHead = this.head;

        this.head = newHead;

        if(currentHead){
            this.head.setNextNode(currentHead);
        };
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
        };
    };

    removeHead(){
        const removedHead = this.head;

        if(!removedHead){
            return;
        };

        this.head = removedHead.getNextNode();

        return removedHead.data;
    };

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