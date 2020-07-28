const Node = require("./Node");

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToHead(data){
        const newHead = new Node(data);
        const currentHead = this.head;

        if(currentHead){
            currentHead.setPreviousNode(newHead);
            newHead.setNextNode(currentHead);
        };

        // head now equals a whole new head 
        this.head = newHead;

        // then finally, if there is no tail, then tail equals head
        if(!this.tail){
            this.tail = newHead;
        };

    };

    addToTail(data){
        const newTail = new Node(data);
        const currentTail = this.tail;

        if(currentTail){
            newTail.setPreviousNode(currentTail);
            currentTail.setNextNode(newTail);
        };

        this.tail = newTail;

        if(!this.head){
            this.head = newTail
        };
    };

    removeHead(){
        const removeHead = this.head;

        if(!removeHead){
            return;
        };

        this.head = removeHead.getNextNode();

        if(this.head){
            this.head.setPreviousNode(null);
        };

        if(removeHead === this.tail){
            this.removetail();
        };

        return removeHead.data;
    };

    removeTail(){
        const removedTail = this.tail;

        if(!removedTail){
            return;
        };

        this.tail = removedTail.getPreviousNode();

        if(this.tail){
            this.tail.setNextNode(null);
        };

        if(removedTail === this.head){
            this.removeHead();
        };

        return removedTail.data;
    };

    removeByData(data){
        let nodeToRemove;
        let currentNode = this.head;

        while(currentNode !== null){
            if(currentNode.data === data){
                nodeToRemove = currentNode;
                break;
            };
            currentNode = currentNode.getNextNode();
        };

        if(!nodeToRemove){
            return null;
        };

        if(nodeToRemove === this.head){
            this.removeHead();
        } else if(nodeToRemove === this.tail){
            this.removeTail();
        } else{
            const nextNode = nodeToRemove.getNextNode();
            const previousNode = nodeToRemove.getPreviousNode();

            nextNode.setPreviousNode(previousNode);
            previousNode.setNextNode(nextNode);
        };

        return nodeToRemove;
    };

    printList(){
        let currentNode = this.head;
        let output = '<head> ';
        
        while (currentNode !== null) {
        
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();

        }

        output += '<tail>';
        console.log(output);
    };
};

module.exports = DoublyLinkedList;