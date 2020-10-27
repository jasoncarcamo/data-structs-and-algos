const Node = require("./Node");

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToHead(data){
        const newHead = new Node(data);
        const head = this.head;

        if(head){
            head.setPreviousNode(newHead);
            newHead.setNextNode(head);
        };

        this.head = newHead;

        if(!this.tail){
            this.tail = this.head;
        };
    }

    addToTail(data){
        const newTail = new Node(data);
        const tail = this.tail;

        if(tail){
            tail.setNextNode(newTail);
            newTail.setPreviousNode(tail);
        };

        this.tail = newTail;

        if(!this.head){
            this.head = this.tail;
        };
    }

    removeHead(){
        const headToRemove = this.head;

        if(!headToRemove){
            return null;
        };

        this.head = headToRemove.getNextNode();

        if(this.head){
            this.head.setPreviousNode(null);
        };

        if(headToRemove === this.tail){
            this.removeTail();
        };

        return headToRemove.data;
    }

    removeTail(){
        const tailToRemove =this.tail;

        if(!tailToRemove){
            return null;
        };

        this.tail = tailToRemove.getPreviousNode();

        if(this.tail){
            this.tail.setNextNode(null);
        };

        if(tailToRemove === this.head){
            this.removeHead();
        };

        return tailToRemove.data;
    }

    removeByData(data){
        let currentNode = this.head;
        let nodeToRemove;

        while(currentNode.getNextNode()){
            if(currentNode.data === data){
                nodeToRemove = currentNode;

                break;
            };

            currentNode = currentNode.getNextNode();
        };

        if(!nodeToRemove){
            return null;
        } else if(nodeToRemove === this.head){
            this.removeHead();
        } else if(nodeToRemove === this.tail){
            this.removeTail();
        } else{
            const nextNode = nodeToRemove.getNextNode();
            const prevNode = nodeToRemove.getPreviousNode();

            nextNode.setPreviousNode(prevNode);
            prevNode.setNextNode(nextNode);
        };

        return nodeToRemove;
    }

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